import { shade } from 'polished';
import styled from 'styled-components';
import { Collors } from '../../../styles/parameters';

export const AppointmentContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: flex-start;
  opacity: 85%;
  background-color: ${Collors.appointment.background};
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  max-width: 1000px;
`;

export const ImageContainer = styled.img`
  margin-right: 0.5rem;
  margin-left: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`
export const DeviceCodeArea = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  margin-left: 1rem;
  padding: 0.25rem;
  flex-direction: column;
  justify-content: space-between;
`
export const Column = styled.div`
  width: 130px;
  height: 100%;
  display: flex;
  margin-left: 0.5rem;
  padding: 0.25rem;
  flex-direction: column;
  justify-content: space-between;
`

export const ActionArea = styled.section`
  right: 0;
  width: 220px;
  height: 100%;
  display: flex;
  margin-left: 1rem;
  padding: 0.25rem;
  flex-direction: row;
  justify-content: flex-end;
  button {
    background: transparent;
    border: none;
    margin: 7%;
    svg {
      color: #fff;
      margin-right: 0px;
      width: 1.7rem;
      height: 1.7rem;
      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }    
`