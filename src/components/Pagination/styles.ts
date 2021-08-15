import { shade } from 'polished'
import styled from 'styled-components'

export const PaginationContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  height: 2.5rem;
  width: 100%;
  button {
    color: #ff9000;
    margin: 0 4px;
    border: 2px solid #ff9000;
    width: 2.5rem;
    transform: skew(20deg);
    font-size: 20px;
    font-weight: 700;
    &:hover {
      background: #ff9000;
      color: #fff;
      border: none;
    }
  }
`

export const CurentButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  background-color: #f90;
  width: 2.5rem;
  transform: skew(20deg);
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`

export const BlockBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff9000;
  color: #ff9000;
  margin: 0 4px;
  width: 2.5rem;
  transform: skew(20deg);
  font-size: 20px;
  font-weight: 700;
`