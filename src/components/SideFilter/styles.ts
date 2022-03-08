import styled from 'styled-components';
import { Collors } from '../../styles/parameters';

export const SideFilterContainer = styled.div`
  z-index: 9997;
  position: fixed;
  width: 100vw;
  height: 100vh !important;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  -webkit-animation: fadeIn 100ms;
  animation: fadeIn 100ms;
`;

export const RightFilterContainer = styled.div`
  background: #fff;
  height: 100%;
  overflow-y: auto;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 22rem;
  z-index: 9999;

  h3 {
    font-size: 1.313;
  }

  h4 {
    font-size: .875rem;
  }

  > svg {
    cursor: pointer;
    float: right;
    color: ${Collors.primary}
  }

  &:before {
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 22rem;
    background-color: #000000a0;
    z-index: 999;
  }
`;


