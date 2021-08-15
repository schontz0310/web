import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import { Collors } from '../../styles/parameters';

const selectedBorder = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -0.4rem;
  }
`;

export const AppointmentContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  opacity: 85%;
  & + div {
    margin-top: 0.5rem;
  }
  span {
    margin-right: 5%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #f4ede8;
    flex-direction: row;
    justify-content: flex-end;
    width: 10%;
    margin-right: 1rem;
    margin-left: auto;
    button{
      background: transparent;
      border: none;
      margin: 10%;
      svg {
        color: #fff;
        margin-right: 0px;
        width: 2rem;
        height: 2rem;
        &:hover {
          color: ${shade(0.2, '#fff')};
        }
      } 
    }  
  }
  div {
    flex: 1;
    padding: 8px 20px;
    background: #3e3b47;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 10px;
    &:hover::before {
      position: absolute;
      height: 100%;
      width: 4rem;
      border-radius: 0.8rem;
      z-index: -1;
      content: '';
      animation-name: ${selectedBorder};
      animation-duration: 300ms;
      animation-fill-mode: forwards;
      background: ${shade(0.1, `${Collors.primary}`)};
      
    }
    &:nth-child(even) {
        background-color: #666666;
      }
      &:nth-child(2) {
        width: 100px;
      }
      &:nth-child(3) {
        max-width: 220px;
      }
      &:nth-child(4) {
        max-width: 220px;
      }
      &:nth-child(5) {
        max-width: 150px;
      }
      &:nth-child(6) {
        max-width: 150px;
      }
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
    div {
      margin-left: 1%;
      color: #fff;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p {
        margin-top: 8px;
      }
    }
  }
  @media(max-width: 800px) {
    div{
      img{
        width: 4rem;
      height: 4rem;
      }
      strong{
        font-size: 1rem;
        margin-left: 4%;
      }
      span{
        button{
          margin: 5%;
          width: auto;
        }
        svg{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
  @media(max-width: 400px) {
    width: 95%;
    div{
      img{
        display: none;
        width: 2rem;
        height: 2rem;
      }
      strong{
        font-size: 1rem;
        margin-left: 4%;
      }
      span{
        margin-right: 5%;
        button{
          margin: 10%;
          width: auto;
        }
        svg{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;