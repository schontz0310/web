import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';



export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #f2f2f2;
`;


export const SideBar = styled.nav`
  display: flex;
  position: absolute;
  width: 13rem;
  top: 0px;
  left: 0px;
  height: 100vh;
  background: #182630;
  justify-content: center;
  justify-items: center;
  color: #fff
`;

export const SideBarContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  margin: 0.5rem;

`;

const selectedBorder = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -0.2rem;
  }
`;

export const SideBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  height: 3rem;
  div{
    padding: 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 0.8rem;
    position: relative;
    z-index: initial;
    transition: transform 0.2s;
    &::before{
      position: absolute;
      height: 98%;
      width: 0.5rem;
      z-index: -1;
      content: '';
      animation-name: ${selectedBorder};
      animation-duration: 300ms;
      animation-fill-mode: forwards;
      background: ${shade(0.5, '#fff')};
    }
    &:hover {
      transform: translateX(0.2rem);
      a{
      transform: translateX(0.2rem);
      width: 105%;

      }
    }
  }

  a {
      color: #f4ede8;
      align-items: initial;
      font-size: 1.0rem;
      width: 100%;
      font-family: 'Roboto';
      text-decoration: none;
      transition: color 0.2s;
    }

    svg {
      margin-right: 0.2rem;
      width: 2.5rem;
      height: 2.5rem;
    }
`;


