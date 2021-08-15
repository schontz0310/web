import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ff9000;
  height: 2.75rem;
  border-radius: 8px;
  border: 0;
  padding: 16px;
  width: 100%;
  color: #312e38;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s;
  padding: 0.5rem;

  &:hover {
    background: ${shade(0.3, '#ff9000')};
  }
  svg{
    width: 18px;
    height: 18px;
  }
`;
