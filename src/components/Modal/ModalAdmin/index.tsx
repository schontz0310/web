import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import {FaMailBulk} from 'react-icons/fa'
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
        <h1>Novo Prato</h1>
        <Input icon={FaMailBulk} name="image" placeholder="Cole o link aqui" />

        <Input icon={FaMailBulk} name="name" placeholder="Ex: Moda Italiana" />
        <Input icon={FaMailBulk} name="price" placeholder="Ex: 19.90" />

        <Input icon={FaMailBulk} name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAdmin;
