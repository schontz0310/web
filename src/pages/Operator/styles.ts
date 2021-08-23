import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import {Collors, HeaderStyle, SideBarStyles} from '../../styles/parameters'

const headerHeight = HeaderStyle.Header.height;
const sideBarSize = SideBarStyles.width;
const backgroundCollor = Collors.background
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${backgroundCollor};
  margin-top: ${headerHeight}rem;
  margin-left: ${sideBarSize}rem;
  height: calc(100vh - ${headerHeight}rem);
`;

export const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #000;
  font-family: Roboto;
`
export const SectionTitle = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #000;
  font-family: Roboto;
`

export const FormContainer = styled.div`
  display: flex;
  background: #fff;
  border-radius: 0.5rem;
  padding: 2%;
  height: 98%;
  width: 90%;
  border: none;
  box-shadow: 0px 0px 3.5rem rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 0px 3.5rem rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 3.5rem rgba(0, 0, 0, 0.05);

  input{
    border-radius: 0;
  }
`
export const Form = styled(Unform)`
  display: flex;
  flex:1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: auto;
  overflow-x: hidden;
`
export const Line = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  margin-bottom: 1rem;
  max-height: 3rem;
`

export const CompanyData = styled.section`
display: flex;
flex-direction: column;
div:first-child{
    width: 100%;
    div:first-child{
      width: 68%;
      margin-right: 1%;
    }
    div:nth-child(2){
      width: 15%;
      margin-right: 1%;
    }
    div:nth-child(3){
      width: 15%;
    }
  }

`
export const CompanyAddress = styled.section`
  display: flex;
  flex-direction: column;
  div:first-child{
    width: 100%;
    div:first-child{
      width: 15%;
      margin-right: 1%;
    }
    div:nth-child(2){
      width: 75%;
      margin-right: 1%;
    }
    div:nth-child(3){
      width: 8%;
    }
  }
  div:nth-child(2){
    width: 100%;
    div:first-child{
      width: 49%;
      margin-right: 1%;
    }
    div:nth-child(2){
      width: 32%;
      margin-right: 1%;
    }
    div:nth-child(3){
      width: 18%;
    }
  }
`

export const CompanyContact = styled.section`
  display: flex;
  flex-direction: column;
  div:first-child{
    width: 100%;
    div:first-child{
      width: 75%;
      margin-right: 1%;
    }
    div:nth-child(2){
      width: 24%;
    }
  }
`

export const CompanyUser = styled.section`
  display: flex;
  flex-direction: column;
  div:first-child{
    width: 100%;
    div:first-child{
      width: 29%;
      margin-right: 1%;
    }
    div:nth-child(2){
      width: 29%;
      margin-right: 1%;
    }
    div:nth-child(3){
      width: 19%;
      margin-right: 1%;
    }
    div:nth-child(4){
      width: 20%;
    }
  }
`;
export const ActionLine = styled.section`
  width: 100%;
  margin-left: 75%;
`;

