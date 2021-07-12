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
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  font-size: 150%;

  color: #232129;
  border: 2px solid #f2f2f2;

& + div{
  // margin-top: 5px;
}

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

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #232129;
    outline: 0;
    width: 85%;

    &::placeholder {
      color: #b1b1b1;
    }
  }

input:-webkit-autofill,
input:-webkit-autofill:hover{
  -webkit-text-fill-color: #000;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
    marker: none;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
  svg {
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  svg {
  }

  span {
    background: #c53030;
    color: #fff;
    overflow:visible;
    z-index:999;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
