/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-unused-expressions */
import React, { useRef, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useAuth } from '../../hook/auth';

import getValidationErrors from '../../utils/getvalidationErros';

import ReactInputMask from '../../components/InputMask'
import Button from '../../components/Button/index';
import Input, { MaskType, PlaceholderType } from '../../components/Input/index';

import ModalAdmin from '../../components/Modal/ModalAdmin'

import { Container, Content, Background, Animationcontainer, LeftSide } from './styles';
import logo from '../../assets/LogoAS.svg';
import { useToast } from '../../hook/toast';
import Select from '../../components/Select';

interface SignInFormData {
  company_type: string;
  company_type_value: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mask, setMask] = useState<MaskType>(MaskType.blank)

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schemaValidation = Yup.object().shape({
          company_type: Yup.string()
            .oneOf(['CPF', 'CNPJ'])
            .required('Selecione uma opção vaçida'),
          company_type_value: Yup.string()
            .required('Valor informado incorreto').min(14).max(18),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schemaValidation.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
          company_type: data.company_type,
          company_type_value: data.company_type_value
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        // disparar um toast
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer Login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );
  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }
  return (
    <>
      <Container>
        <LeftSide>
          <Content>
            <Animationcontainer>
              <img src={logo} alt="logomarca" />
              <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu Logon</h1>
                <Select
                  name="company_type"
                  initialValue="Tipo"
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
                  onChange={() => setMask(formRef.current?.getFieldValue("company_type"))}
                />
                <ReactInputMask
                  name="company_type_value"
                  mask={mask === "CNPJ" ? PlaceholderType.cnpj :
                  mask === "CPF" ? PlaceholderType.cpf : PlaceholderType.blank}
                  placeholder={mask === "CNPJ" ? PlaceholderType.cnpj :
                  mask === "CPF" ? PlaceholderType.cpf : PlaceholderType.blank}
                />
                <Input
                  name="email"
                  icon={FiMail}
                  autoComplete="off"
                  placeholder="E-mail"
                />
                <Input
                  name="password"
                  icon={FiLock}
                  type="password"
                  placeholder="Senha"
                />
                <Button model="register" type="submit" />
              </Form>
              <Link to="/signup">
                <FiLogIn />
                Criar conta
              </Link>
            </Animationcontainer>

          </Content>
          <footer>
            <button type="button" onClick={toggleModal}>
              <p>Powered by Agility in Solutions</p>
            </button>
            <ModalAdmin
              isOpen={modalOpen}
              setIsOpen={toggleModal}
            />
          </footer>
        </LeftSide>


        <Background />
      </Container>
    </>
  );
};

export default SignIn;
