/* eslint-disable import/no-duplicates */
/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import {format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { 
  AppointmentContainer, 
} from './styles';

import DeviceAvatar from '../../assets/device3.png'


export interface AppointmentData{
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
  values: AppointmentData;
  showFilter?: boolean;
  buttonRegister?: boolean;
  filterButtonName?: string;
  registerButtonName?: string;
  clickExclude?: (id: string) => void 
  clickUpdate?: (deviceData: Omit< AppointmentData, "created_at" | "updated_at"> ) => void 
}

function Appointment ({
  values,
  clickExclude,
  clickUpdate
}: IAppointmentProps ): JSX.Element {
  const [data] = useState<AppointmentData>(values)

  return (
    <>
      { !!data && (
      <AppointmentContainer key={data.id}>     
        <div>
          <img src={DeviceAvatar} alt={data.model} />
          <div>
            <h3>Código</h3>
            <p>{data.code}</p>
          </div>
          <div>
            <h3>Modelo</h3>
            <p>{data.model}</p>
          </div>
          <div>
            <h3>Variante</h3>
            <p>{data.variant}</p>
          </div>
          <div>
            <h3>Status</h3>
            <p>{data.status}</p>
          </div>
          <div>
            <h3>Data</h3>
            <p>
              {format(parseISO(data.updated_at), " dd '/' MM '/' Y", {
              locale: ptBR,
            })}
            </p>
          </div>
          <span>
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
          </span>
        </div>
      </AppointmentContainer>
    )}
    </>
  )
}    
export default Appointment;   