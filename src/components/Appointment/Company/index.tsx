/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-duplicates */
/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { useCallback, useState } from 'react';

import { FiTrash2} from 'react-icons/fi';
import { 
  AppointmentContainer,
  ImageContainer,
  Column,
  ActionArea,
  CompanyNameArea
} from './styles';

import CompanyDefault from '../../../assets/companyDefault.png'
import { ICompanyRequest } from '../../Modal/Device/ModalConnectDevice ';

interface IAppointmentProps {
  children?: React.ReactNode;
  values: ICompanyRequest;
  showFilter?: boolean;
  buttonRegister?: boolean;
  filterButtonName?: string;
  registerButtonName?: string;
  clickExclude?: (id: string) => void 
  clickUpdate?: (deviceData: unknown ) => void 
  clickConnect?: (deviceData: unknown ) => void 
}

function CompanyAppointment ({
  values,
  clickExclude,
  clickUpdate,
  clickConnect
}: IAppointmentProps ): JSX.Element {
  const [data] = useState<ICompanyRequest>(values)

  const getAvatar = useCallback(() => {
    if (data.avatarUrl === null) {
      return <ImageContainer src={CompanyDefault} />
    } 
      return <ImageContainer src={`${data.avatarUrl}`} />
    
  },[data])
  return (
    <>
      { !!data && (
      <AppointmentContainer key={data.id}>
        {getAvatar()}     
        <CompanyNameArea>
          <h3>Nome</h3>  
          <p>{data.name}</p>
        </CompanyNameArea>
        <Column>
          <h3>Modelo</h3>
          <p>{data.contact}</p>
        </Column>
        <Column>
          <h3>Variante</h3>
          <p>{data.email}</p>
        </Column>
        <Column>
          <h3>Status</h3>
          <p>{data.name}</p>
        </Column>
        <ActionArea>
          {clickExclude !== undefined && (
            <button onClick={() => clickExclude(data.id)} type="button">
              <FiTrash2 />
            </button>
          )}       
        </ActionArea>
      </AppointmentContainer>
    )}
    </>
  )
}    
export {CompanyAppointment};   