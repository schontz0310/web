/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';
import { FiFilter } from 'react-icons/fi';

import { Container } from './styles';

type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  buttonText?: string
  model: 'filter' | 'register' | 'submit'
};

const Button: React.FC<Buttonprops> = ({ 
  loading, 
  children,
  buttonText, 
  model,
  ...rest
}) => (
  <Container type={model === 'submit' ? model :"button"} {...rest}>
    {loading ? 'Carregando' : children}
    {model === 'filter' && (
      <FiFilter
        style={{
        marginRight: '0.5rem'
      }}
        size={16}
      />
    )}
    {buttonText || model && (
      <div>
        <p>
          {buttonText || (model === 'filter' ? 'Filtro' : 'Cadastrar')}
        </p>
      </div>
    )}
  </Container>
);
export default Button;
