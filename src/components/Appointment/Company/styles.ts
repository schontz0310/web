import { shade } from 'polished';
import styled from 'styled-components';
import { Collors } from '../../../styles/parameters';

export const AppointmentContainer = styled.div`
  display: flex;
  width: 90%;
  min-height: 100px;
  align-items: center;
  justify-content: flex-start;
  opacity: 85%;
  background-color: ${Collors.appointment.background};
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  max-width: 1000px;
  border: 1px solid ${Collors.appointment.border};   
`;

export const ImageContainer = styled.img`
  object-fit: contain;
  object-position: center;
  background-size: cover;
  margin-right: 0.5rem;
  margin-left: 1rem;
  width: 6rem;
  height: 4rem;
  border-radius: 30%;
`
export const CompanyNameArea = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  margin-left: 0.5rem;
  padding: 0.25rem;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    min-height: 30px;
  }
  p {
    min-height: 44px;
    max-height: 44px;
    overflow: hidden;  
  }
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