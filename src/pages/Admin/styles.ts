import { shade } from 'polished';
import styled from 'styled-components';

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

export const SideBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  height: 3rem;

  a {
      color: #f4ede8;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      font-family: 'Roboto';
      margin: 0.5rem 0;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.3, '#f4ede8')};
      }
    }

    svg {
      margin-right: 8px;
      width: 2.5rem;
      height: 2.5rem;
    }
`;


