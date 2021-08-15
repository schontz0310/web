import styled from 'styled-components';
import { Form as Unform } from '@unform/web';




export const Form = styled(Unform)`
  padding: 5% 5%;
  display: flex;
  flex-direction: column;

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
    margin-top: 1.5rem;
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

export const TwoFields = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  margin-bottom: 1rem;
  max-height: 3rem;
      div:first-child{
      width: 49%;
      margin-right: 2%;
    }
    div:nth-child(2){
      width: 49%;
    }
`