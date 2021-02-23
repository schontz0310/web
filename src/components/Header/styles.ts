import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 0px;
  height: 4.5rem;
  padding-right: 5rem;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  svg {
    color: #999591;
    width: 20px;
    height: 20px;
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
    width: 40%
  }

  p{
    color: #f2f2f2;
    font-family: 'Roboto';
    margin-left: 0.5rem;
  }

`
