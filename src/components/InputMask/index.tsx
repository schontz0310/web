/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  ComponentType,
  useEffect,
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import ReactInputMask, {Props as InputProps} from 'react-input-mask'
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

export enum PlaceholderType{
  cnpj = "99.999.999/99-99",
  cpf = "000.000.000-00",
  blank = "",
}
export enum MaskType{
  blank = "BLANK",
  cnpj = "CNPJ",
  cpf = "CPF",
}

interface Props extends InputProps {
  name: string;
  icon?: ComponentType<IconBaseProps>;
  containerStyle?: object;
}

export default function InputMask ({
  containerStyle,
  name,
  icon: Icon,
  mask,
  ...rest
}:Props) {

  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    const status =  inputRef.current as unknown as InputHTMLAttributes<HTMLInputElement>
    setIsFocused(false);
    if (status.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      <ReactInputMask
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        mask={mask}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};
