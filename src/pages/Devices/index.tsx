/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import {
  Container,
  ContentContainer,
  FooterContainer
} from './styles';

import ActionHeader from '../../components/ActionHeader';
import ModalDevice, { DeviceFormData } from '../../components/Modal/Device/ModalCreateDevice';
import ModalConnectDevice from '../../components/Modal/Device/ModalConnectDevice ';
import ModalDeviceUpdate from '../../components/Modal/Device/ModalUpdateDevice';
import { useApi } from '../../services/hooks/useApi';
import { HTTPMethod, Recurse } from '../../services/api';
import { useToast } from '../../hook/toast';
import Appointment from '../../components/Appointment/Device';
import { findAllDevices } from '../../services/hooks/useDeviceFetch';

interface IFindAllDevicesResponse {
  id: string;
  code: string;
  model: string;
  variant: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export default function Devices ():JSX.Element {

  const [modalVisible, setModalVisible] = useState(false)
  const [modalEditVisible, setModalEditVisible] = useState(false)
  const [modalConnectVisible, setModalConnectVisible] = useState(false)
  const [editedValues, setEditedValues] = useState<Omit< IFindAllDevicesResponse, "created_at" | "updated_at">>({
    code: '',
    id: '',
    model: '',
    status: '',
    variant: ''
  })
  const { addToast } = useToast();
  const queryClient = useQueryClient()
    
  const {fullData} = findAllDevices<IFindAllDevicesResponse>()
 
  function showConnectModal(deviceData: Omit< IFindAllDevicesResponse, "created_at" | "updated_at">) {
    setEditedValues(deviceData)   
    setModalConnectVisible(true)
  }

  function showEditModal(deviceData: Omit< IFindAllDevicesResponse, "created_at" | "updated_at">) {
    setEditedValues(deviceData)
    setModalEditVisible(true)
  }

  async function updateDevice(deviceData:Omit< IFindAllDevicesResponse, "created_at" | "updated_at">) {
    try {
      const response = await useApi(deviceData, HTTPMethod.patch, Recurse.updateDevice)
      if (response.status === 200 ) {
        setModalEditVisible(false)
        addToast({
          type: 'success',
          title: 'Device editado com sucesso',
          description: `Cadastro ${response.statusText}`
        })
        queryClient.resetQueries('deviceslist')
      }else {
        addToast({
          type: 'error',
          title: 'Erro ao Cadastrar',
          description: ` ${response.data.message}`
        })
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Falha',
        description: `${error.response}`
      })
    }
  }

  async function handleConnectDevice(deviceData:Omit< IFindAllDevicesResponse, "created_at" | "updated_at">) {
    try {
      const response = await useApi(deviceData, HTTPMethod.patch, Recurse.updateDevice)
      if (response.status === 200 ) {
        setModalEditVisible(false)
        addToast({
          type: 'success',
          title: 'Device editado com sucesso',
          description: `Cadastro ${response.statusText}`
        })
        queryClient.resetQueries('deviceslist')
      }else {
        addToast({
          type: 'error',
          title: 'Erro ao Cadastrar',
          description: ` ${response.data.message}`
        })
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Falha',
        description: `${error.response}`
      })
    }
  }

  async function removeDevice(id:string) {
    try {
      const response = await useApi(id, HTTPMethod.delete, Recurse.removeDevice)
      if (response.status === 204 ) {
        addToast({
          type: 'success',
          title: 'Device Excluido com sucesso',
          description: `Exclusão ${response.statusText}`
        })
        queryClient.resetQueries('deviceslist')
      }else {
        addToast({
          type: 'error',
          title: 'Erro ao Excluir',
          description: ` ${response.data.message}`
        })
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Falha',
        description: `${error.response}`
      })
    }
  }
  async function createDevice(data: DeviceFormData): Promise<any> {
    setModalVisible(false)
    try {
      const response = await useApi(data, HTTPMethod.post, Recurse.createDevice)
      if (response.status === 200 ) {
        addToast({
          type: 'success',
          title: 'Device cadastrado com sucesso',
          description: `Cadastro ${response.statusText}`
        })
        queryClient.resetQueries('deviceslist')
      }else {
        addToast({
          type: 'error',
          title: 'Erro ao Cadastrar',
          description: ` ${response.data.message}`
        })
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Falha',
        description: `${error.response}`
      })
    }
  }
  
  return (
    <Container>
      <ActionHeader 
        buttonFilter
        buttonRegister
        registerbuttonClick={() => setModalVisible(true)}
      />
      <ContentContainer>
        {fullData.map( device => (
          <Appointment
            key={device.id} 
            values={device}
            clickExclude={(id: string) => removeDevice(id)}
            clickUpdate={
              (deviceData: Omit< IFindAllDevicesResponse, "created_at" | "updated_at">) =>  
              showEditModal(deviceData)
            }
            clickConnect={
              (deviceData: Omit< IFindAllDevicesResponse, "created_at" | "updated_at">) =>  
              showConnectModal(deviceData)
            }
          />
        ))}
      </ContentContainer>
      <FooterContainer />
      <ModalDevice
        isOpen={modalVisible}
        setIsOpen={() => setModalVisible(false)}
        handleAddDevice={(data) => createDevice(data)}
      />
      <ModalDeviceUpdate
        isOpen={modalEditVisible}
        setIsOpen={() => setModalEditVisible(false)}
        values={editedValues}
        handleUpdateDevice={(device) => updateDevice(device)}
      />
      <ModalConnectDevice 
        isOpen={modalConnectVisible}
        setIsOpen={() => setModalConnectVisible(false)}
        values={editedValues}
        handleConnectDevice={(device) => handleConnectDevice(device)}
      />
    </Container>
  );
};