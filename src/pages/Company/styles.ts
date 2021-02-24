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
  flex-direction: column;
  background: transparent;
`;


