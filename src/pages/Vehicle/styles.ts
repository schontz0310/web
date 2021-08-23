import styled from 'styled-components';
import {Collors, HeaderStyle, PaginationContainer, SideBarStyles} from '../../styles/parameters'

const headerHeight = HeaderStyle.Header.height;
const sideBarSize = SideBarStyles.width;
const paginationHeight = PaginationContainer.height
const backgroundCollor = Collors.background


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${backgroundCollor};
  margin-top: ${headerHeight}rem;
  margin-left: ${sideBarSize}rem;
  height: calc(100vh - ${headerHeight}rem);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f90;
  width: 100%;
  height: calc(100% - ${paginationHeight}rem);
  overflow-y: scroll;
  padding-right: 2rem;
  background: transparent;
  
  &::-webkit-scrollbar {
  width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${paginationHeight}rem;
`

