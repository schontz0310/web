import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 2% 2%;
  display: flex;
  flex-direction: column;

  div+div{
    margin-top: 0.75rem;
  }


  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  input{
    background: transparent;
    padding: 0;

  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #C28F0B;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #e8b022;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;
