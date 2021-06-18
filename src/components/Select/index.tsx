/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-props-no-spreading */

import React, {
  ComponentType,
  useEffect,
  useRef,
  useState,
  useCallback,
  SelectHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface optionProps{
  value: string;
  text: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
  containerStyle?: Object;
  options: optionProps[];
  initialValue: string | number;
}


const Select: React.FC<Props> = ({
  containerStyle,
  name,
  icon: Icon,
  options,
  initialValue,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    if (selectRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  useEffect(() => {
    registerField({name: fieldName, ref: selectRef.current, path: 'value'});
  }, [fieldName, registerField]);


  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      <select
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={initialValue}
        ref={selectRef}
        {...rest}
      >
        <option disabled hidden>{initialValue}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};
export default Select;
