/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import { FormHandles } from '@unform/core';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup'

import { useHistory } from 'react-router-dom';
import ReactInputMask from '../../components/InputMask'
import Input, { MaskType, PlaceholderType } from '../../components/Input'
import Select from '../../components/Select'
import ViaCepFind from '../../utils/ExternsApis/ViaCep'
import getValidationErrors from '../../utils/getvalidationErros';
import {
  Container,
  FormContainer,
  Form,
  CompanyData,
  CompanyAddress,
  SectionTitle,
  Line,
  CompanyContact,
  CompanyUser,
  ActionLine,
} from './styles';
import Button from '../../components/Button';
import { useToast } from '../../hook/toast';
import { useApi } from '../../services/hooks/useApi';
import { HTTPMethod, Recurse } from '../../services/api';
import { useLoading } from '../../hook/spinner';

interface IIBGEUFResponse {
  sigla: string;
}

interface optionProps {
  value: string;
  text: string;
}

export interface CreateCompanyFormData {
  name: string;
  type: string;
  type_value: string;
  comment: string;
  address_zip_code: string;
  address_street: string;
  address_number: string;
  address_district: string;
  address_city: string;
  address_state: string;
  contact: string;
  phone: string;
  user: string;
  email: string;
  password: string;
  password_confirm: string;
}

function CreateCompany ():JSX.Element {

  const {showLoading, removeLoading} = useLoading()
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [ufs, setUfs] = useState<optionProps[]>([])
  const [mask, setMask] = useState<MaskType>(MaskType.blank)

  useEffect(() => {
    axios.get<IIBGEUFResponse[]>
      ('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(response => {
        const ufInitials: optionProps[] = []
        response.data.map(uf => ufInitials.push({
          text: uf.sigla,
          value: uf.sigla,
        }),
          setUfs(ufInitials)
        )
      })
  }, [])

  async function createCompany(data: CreateCompanyFormData): Promise<any> {
    showLoading()
    try {
      const response = await useApi(data, HTTPMethod.post, Recurse.createCompany)
      if (response.data.status) {
        addToast({
          type: 'error',
          title: 'Problema',
          description: `${response.data.message}`
        })
      } else {
        addToast({
          type: 'success',
          title: 'Cadastro efetuado com Sucesso',
          description: `a empresa ${response.data.id} foi cadastrada com sucesso`
        })
        formRef.current?.reset()
        history.push('/admin');
        removeLoading()
      }
    } catch (error: unknown) {
      removeLoading()
      addToast({
        type: 'error',
        title: 'Falha',
        description: `${error}`
      })
    }
  }

  async function handleSubmit(data: CreateCompanyFormData) {
    
    const typeValueFomatted = data.type_value.replaceAll(/[^0-9]/g, "");
    const addressZipCodeFormatted = data.address_zip_code.replaceAll(/[^0-9]/g, "")
    const phoneFormatted = data.phone.replaceAll(/[^0-9]/g, "")

    const dataFormatted: CreateCompanyFormData = {
      ...data,
      type_value: typeValueFomatted,
      address_zip_code: addressZipCodeFormatted,
      phone: phoneFormatted
    }

    try {
      formRef.current?.setErrors({});
      const schemaValidation = Yup.object().shape({
        name: Yup.string().required('Nome da Empresa obrigatório'),
        type: Yup.string().oneOf(['CPF', 'CNPJ']).required(),
        type_value: Yup.string().required().min(11).max(18),
        comment: Yup.string().notRequired(),
        address_zip_code: Yup.string().required().length(8),
        address_street: Yup.string().required(),
        address_number: Yup.string().required(),
        address_district: Yup.string().required(),
        address_city: Yup.string().required(),
        address_state: Yup.string().oneOf((ufs.map(uf => uf.text))).required(),
        contact: Yup.string().required(),
        phone: Yup.string().required(),
        user: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().min(8).required(),
        password_confirm: Yup.string().oneOf([Yup.ref('password')])
      });
      await schemaValidation.validate(dataFormatted, {
        abortEarly: false,
      });
      createCompany(dataFormatted)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }

  async function findCep (code: string) {
    const value = await ViaCepFind(code)
    if (value?.error === false && value.status === 200) {
      formRef.current?.setFieldValue('address_street', value.address?.street)
      formRef.current?.setFieldValue('address_district', value.address?.district)
      formRef.current?.setFieldValue('address_city', value.address?.city)
      const ufField = formRef.current?.getFieldRef('address_state')
      ufField.focus()
      ufField.value = value.address?.uf
      const numberField = formRef.current?.getFieldRef('address_number')
      numberField.focus()
    }
  }

  return (
    <Container>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <SectionTitle>Empresa</SectionTitle>
          <CompanyData>
            <Line>
              <Input
                name="name"
                placeholder="Nome da Empresa"
              />
              <Select
                initialValue="Tipo"
                name="type"
                options={[
                  {
                    text: 'CNPJ',
                    value: 'CNPJ',
                  },
                  {
                    text: 'CPF',
                    value: 'CPF',
                  },
                ]}
                onChange={() => setMask(formRef.current?.getFieldValue("type"))}
              />
              <ReactInputMask
                mask={mask === "CNPJ" ? PlaceholderType.cnpj :
                  mask === "CPF" ? PlaceholderType.cpf : PlaceholderType.blank}
                name="type_value"
                placeholder={mask === "CNPJ" ? PlaceholderType.cnpj :
                  mask === "CPF" ? PlaceholderType.cpf : PlaceholderType.blank}
              />
            </Line>
            <Line>
              <Input
                name="comment"
                placeholder="Observações"
              />
            </Line>
          </CompanyData>
          <SectionTitle>Endereço</SectionTitle>
          <CompanyAddress>
            <Line>
              <ReactInputMask
                mask="99999-999"
                name="address_zip_code"
                placeholder="CEP"
                onChange={() => findCep(formRef.current?.getFieldValue("address_zip_code"))}
              />
              <Input
                name="address_street"
                placeholder="Logradouro"
              />
              <Input
                name="address_number"
                placeholder="N°"
              />
            </Line>
            <Line>
              <Input
                name="address_district"
                placeholder="Bairro"
              />
              <Input
                name="address_city"
                placeholder="Cidade"
              />
              <Select
                initialValue="Estado"
                name="address_state"
                options={ufs}
              />
            </Line>
          </CompanyAddress>
          <SectionTitle>Contato</SectionTitle>
          <CompanyContact>
            <Line>
              <Input
                name="contact"
                placeholder="Nome"
              />
              <ReactInputMask
                mask="+55\ (99)9999-9999"
                name="phone"
                placeholder="Telefone"
              />
            </Line>
          </CompanyContact>
          <SectionTitle>Usuario Administrador</SectionTitle>
          <CompanyUser>
            <Line>
              <Input
                name="user"
                placeholder="Nome completo do usuário"
              />
              <Input
                name="email"
                placeholder="email"
              />
              <Input
                name="password"
                placeholder="password"
                type="password"
              />
              <Input
                name="password_confirm"
                placeholder="confirmar password"
                type="password"
              />
            </Line>
          </CompanyUser>
          <Line>
            <ActionLine>
              <Button 
                type="submit"
                model='register'
              />
            </ActionLine>
          </Line>
        </Form>
      </FormContainer>
    </Container>
  );
};

export {CreateCompany}