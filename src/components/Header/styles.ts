import { shade } from 'polished'
import styled from 'styled-components'
import {HeaderStyle} from '../../styles/parameters'

const headerHeight = HeaderStyle.Header.height

export const Container = styled.div`
  display: flex;
  position: absolute;
  background: #2d3748;
  width: 100vw;
  top: 0px;
  height: ${headerHeight}rem;
  justify-content: space-between;
`
export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  width: 13rem;
  align-items: center;
  justify-content: center;
  margin-right: 5rem;

  button {
    display:flex;
    align-self:center;
    margin-left: auto;
    background: transparent;
    width:1.2rem;
    height:1.2rem;
    border: 0;
    margin-right: 2rem;
  }

  svg {
    color: #999591;
    width: 1.2rem;
    height: 1.2rem;
    transition: background-color 0.3s, transform 0.3s;

    &:hover{
      color: ${shade(0.3, '#fff')};
      transform: scale(1.2, 1.2);
    }
  }
`


export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  width: 13rem;
  align-items: center;
  justify-content: center;

  img{
    margin-left: 1rem;
    width: 5rem;
  }

  p{
    color: #f2f2f2;
    font-family: 'Roboto';
    margin-left: 0.5rem;
  }

`
