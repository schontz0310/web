import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import {FiMail} from 'react-icons/fi'
import { Form } from './styles';
import Modal from "../index";
import Input from '../../Input';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalAdmin: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async () => {
      setIsOpen();
    },
    [setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Acesso Administrativo</h1>
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input icon={FiMail} name="name" type="password" placeholder="Senha" />
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
