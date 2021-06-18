/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';



interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f2f2f2;
  padding: 16px;
  width: 100%;
  font-size: 150%;
  border-radius: 0.5rem;

  color: #232129;
  border: 2px solid #f2f2f2;


  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      font-size: 100%;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  select {
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;
    height: 21px;
    color: #b1b1b1;
    option{
    color: #b1b1b1;
    }

    &::placeholder {
      color: #b1b1b1;
    }
  }

select:-webkit-autofill,
select:-webkit-autofill:hover{
  -webkit-text-fill-color: #000;
  box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
    marker: none;
  }

  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

