/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-duplicates */
/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import {format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { FiTrash2, FiEdit2, FiLink } from 'react-icons/fi';
import { 
  AppointmentContainer,
  ImageContainer,
  DeviceCodeArea,
  Column,
  ActionArea
} from './styles';

import DeviceAvatar from '../../../assets/device3.png'


export interface DeviceAppointmentData{
  id: string;
  code: string;
  model: string;
  variant: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface IAppointmentProps {
  children?: React.ReactNode;
  values: DeviceAppointmentData;
  showFilter?: boolean;
  buttonRegister?: boolean;
  filterButtonName?: string;
  registerButtonName?: string;
  clickExclude?: (id: string) => void 
  clickUpdate?: (deviceData: Omit< DeviceAppointmentData, "created_at" | "updated_at"> ) => void 
  clickConnect?: (deviceData: Omit< DeviceAppointmentData, "created_at" | "updated_at"> ) => void 
}

function DeviceAppointment ({
  values,
  clickExclude,
  clickUpdate,
  clickConnect
}: IAppointmentProps ): JSX.Element {
  const [data] = useState<DeviceAppointmentData>(values)
  return (
    <>
      { !!data && (
      <AppointmentContainer key={data.id}>     
        <ImageContainer src={DeviceAvatar} />
        <DeviceCodeArea>
          <h3>Código</h3>  
          <p>{data.code}</p>
        </DeviceCodeArea>
        <Column>
          <h3>Modelo</h3>
          <p>{data.model}</p>
        </Column>
        <Column>
          <h3>Variante</h3>
          <p>{data.variant}</p>
        </Column>
        <Column>
          <h3>Status</h3>
          <p>{data.status}</p>
        </Column>
        <Column>
          <h3>Data</h3>
          <p>
            {format(parseISO(data.updated_at), " dd '/' MM '/' Y", {
              locale: ptBR,
            })}
          </p>
        </Column>
        <ActionArea>
          {clickUpdate !== undefined && (
            <button
              onClick={() => clickUpdate({
                  id: data.id,
                  code: data.code,
                  model: data.model,
                  variant: data.variant,
                  status: data.status,
                })}
              type="button"
            >
              <FiEdit2 />
            </button>
          )}
          {clickExclude !== undefined && (
            <button onClick={() => clickExclude(data.id)} type="button">
              <FiTrash2 />
            </button>
          )}
          {clickConnect !== undefined && (
            <button
              onClick={() => clickConnect({
                id: data.id,
                code: data.code,
                model: data.model,
                variant: data.variant,
                status: data.status,
              })}
              type="button"
            >
              <FiLink />
            </button>
          )}         
        </ActionArea>
      </AppointmentContainer>
    )}
    </>
  )
}    
export {DeviceAppointment};   