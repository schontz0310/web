/* eslint-disable no-param-reassign */
import {AxiosResponse } from "axios"
import api, { HTTPMethod, Recurse } from "../api"



async function apiPost(data: any, recurse: Recurse): Promise<AxiosResponse<any>> {
    const response = await api.post(`/${recurse}`, data)
    return response
}

async function apiDelele(id: string, recurse: Recurse): Promise<AxiosResponse<any>> {
    const response = await api.delete(`/${recurse}/${id}`)
    return response
}

async function apiUpdate(id: string, data: any, recurse: Recurse): Promise<AxiosResponse<any>> {
  delete data.id
  const response = await api.patch(`/${recurse}/${id}`, data)
  return response
}

export async function useApi( data: any, method: HTTPMethod, recurse: Recurse):
Promise<AxiosResponse<any>>
{
  let response: AxiosResponse
    switch (method) {
      case HTTPMethod.post :
          response = await apiPost(data, recurse)
          return response
      case HTTPMethod.delete :
          response = await apiDelele(data, recurse)
          return response  
      case HTTPMethod.patch :
          response = await apiUpdate(data.id, data, recurse)
          return response 
      default:
        throw new Error('Critical Error');
    }
}


