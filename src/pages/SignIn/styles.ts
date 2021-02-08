import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import BackgroundImage from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  min-height: 600px;

  display: flex;
  align-items: stretch;
`;

const apperFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-40px);
}
to{
  opacity: 1;
  transform: translateX(0px);
}
`;

export const Animationcontainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  transition: animation 0.2s;
  animation: ${apperFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      font-size: 120%;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.3, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 120%;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.3, '#ff9000')};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const LeftSide = styled.div`
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  //place-content: center;
  //align-items: SPA;
  justify-content: space-between;

  width: 100%;
  max-width: 40rem;

  footer{
    display: flex;
    //position: relative;
    width: 100%;
    //margin-top: 50px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    > button{
    background: transparent;
    border: none;
    color: #474747;

    }
  }
`;


export const Content = styled.div`

  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;
  min-height: 600px;
  max-width: 40rem;



  img {
    margin-top: 10%;
    width: 13.75rem;
  }

  form {
    margin-top: 60px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      margin-top: 24px;
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      padding: 0 16px;
      color: #fff;
      font-weight: 500;
      width: 100%;
      transition: background-color 0.3s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      margin-top: 24px;
      color: #535353;
      text-decoration: none;
      display: block;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#f2f2f2')};
      }

    }
  }


`;
export const Background = styled.div`
  display: flex;
  height: 100%;
  min-height: 600 px;
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
`;
