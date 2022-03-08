import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import { SideBarStyles} from '../../styles/parameters'

const sidebarWidht = SideBarStyles.width

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #f90;
`;


export const SideBar = styled.nav`
  display: flex;
  position: absolute;
  width: ${sidebarWidht}rem;
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
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background: transparent;
  margin: 7rem 0.5rem;

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
  height: 3rem;
  width: 95%;
  margin-top: 1rem;
  a {
      color: #f4ede8;
      align-items: initial;
      font-size: 1.5rem;
      width: 100%;
      font-family: 'Roboto';
      text-decoration: none;
      transition: color 0.2s;
    }
    P{
      margin-left: 20px;
      color: #f90;
      font-size: 1.3rem;
      font-weight: 400;
      letter-spacing:1.2px;
      font-family: 'Roboto Slab';
    }
`;

export const SideBarItemContainer = styled.div`
    margin-left: 0.5rem;
    padding: 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 0.4rem;
    position: relative;
    z-index: initial;
    transition: background-color 0.2s;
    background-color: transparent;
    &:hover {
      background-color: #f4ede8;
    }
`  

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    svg {
      color: #f90;
      width: 38px;
      height: 38px;
    }
`