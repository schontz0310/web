/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState , useEffect } from 'react';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../../../../hook/toast'

import getValidationErrors from '../../../../utils/getvalidationErros';

import { Form, TwoFields } from './styles';
import Modal from "../../index";
import Input from '../../../Input';
import Button from '../../../Button';
import Select from '../../../Select';



interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddDevice: (device: DeviceFormData) => void;
}

export interface DeviceFormData {
  code: string;
  model: string;
  variant: string;
  status: string;
}

interface optionProps {
  value: string;
  text: string;
}

const ModalDevice: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddDevice
}) => {

  const formRef = useRef<FormHandles>(null);
  const [models, setModels] = useState<optionProps[]>([])
  const [variants, setVariants] = useState<optionProps[]>([])
  const [status, setStatus] = useState<optionProps[]>([])

  const { addToast } = useToast();

  useEffect(() => {
    setModels([
      {
        value: 'AGS-001',
        text: 'AGS-001'
      }
    ])
    setVariants([
      {
        value: 'Simples',
        text: 'Simples'
      },
      {
        value: 'Dupla',
        text: 'Dupla'
      }
    ])
    setStatus([
      {
        value: 'Ativo',
        text: 'Ativo'
      },
      {
        value: 'Inativo',
        text: 'Inativo'
      },
      {
        value: 'Bloqueado',
        text: 'Bloqueado'
      },
      {
        value: 'Pendente',
        text: 'Pendente'
      }
    ])
  },[])

  function createDevice(data: DeviceFormData) {
     handleAddDevice(data)
  }

  async function handleSubmit(data: DeviceFormData) {
      try {
        formRef.current?.setErrors({});
        const schemaValidation = Yup.object().shape({
          code: Yup
            .string()
            .required('Codigo obrigatório'),
          model: Yup
            .string()
            .oneOf((models.map(model => model.text)), 'Modelo obrigatório')
            .required(),
          variant: Yup
            .string()
            .oneOf((variants.map(variant => variant.text)), 'Variação obrigatória')
            .required(),
          status: Yup
            .string()
            .oneOf((status.map(value => value.text)), 'Status obrigatório')
            .required(),
        });
        await schemaValidation.validate(data, {
          abortEarly: false,
        });
        createDevice(data)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          // console.log(err)
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer Login, cheque as credenciais',
        });
      }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastro de Dispositivos</h1>
        <TwoFields> 
          <Input name="code" placeholder="Código do dispositivo" />
          <Select
            initialValue="selecione o modelo"
            name="model"
            options={models}
          />
        </TwoFields>
        <TwoFields>
          <Select
            initialValue="selecione a variação"
            name="variant"
            options={variants}
          />
          <Select
            initialValue="selecione o status"
            name="status"
            options={status}
          />
        </TwoFields>
        <Button
          model='submit'
        />
      </Form>
    </Modal>
  );
};

export default ModalDevice;
