import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import {FiMail} from 'react-icons/fi'
import * as Yup from 'yup';

import {useAuth} from '../../../hook/auth'
import { useToast } from '../../../hook/toast'

import getValidationErrors from '../../../utils/getvalidationErros';

import { Form } from './styles';
import Modal from "../index";
import Input from '../../Input';
import { useLoading } from '../../../hook/spinner';


interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}


interface SignInFormData {
  email: string;
  password: string;
}

const ModalAdmin: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
}) => {

  const formRef = useRef<FormHandles>(null);

  const { masterSignIn } = useAuth();
  const { addToast } = useToast();
  const {removeLoading} = useLoading()


  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schemaValidation = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schemaValidation.validate(data, {
          abortEarly: false,
        });

        await masterSignIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        removeLoading()
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer Login, cheque as credenciais',
        });
      }
    },
    [addToast, masterSignIn, removeLoading],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Acesso Administrativo</h1>
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input icon={FiMail} name="password" type="password" placeholder="Senha" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Acessar</p>
          <div className="icon">
            <FiMail size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAdmin;
