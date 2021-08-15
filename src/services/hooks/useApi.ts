/* eslint-disable no-param-reassign */
import { AxiosResponse } from "axios"
import api, { HTTPMethod, Recurse } from "../api"



async function apiPost(data: any, recurse: Recurse): Promise<AxiosResponse<any>> {
  try{
    const response = await api.post(`/${recurse}`, data)
    return response
  }catch(error){
    return error.response
  }
}

async function apiDelele(id: string, recurse: Recurse): Promise<AxiosResponse<any>> {
  try{
    const response = await api.delete(`/${recurse}/${id}`)
    return response
  }catch(error){
    return error.response
  }
}

async function apiUpdate(id: string, data: any, recurse: Recurse): Promise<AxiosResponse<any>> {
  delete data.id
  try{
    const response = await api.patch(`/${recurse}/${id}`, data)
    return response
  }catch(error){
    return error.response
  }
}

export async function useApi( data: any, method: HTTPMethod, recurse: Recurse):
Promise<AxiosResponse<any>>
{
  let response: AxiosResponse
  try {
    switch (method) {
      case HTTPMethod.post :
        try {
          response = await apiPost(data, recurse)
          return response
        } catch (error) {
          return error
        }
      
      case HTTPMethod.delete :
        try {
          response = await apiDelele(data, recurse)
          return response
        } catch (error) {
          return error
        }
      
      case HTTPMethod.patch :
        try {
          response = await apiUpdate(data.id, data, recurse)
          return response
        } catch (error) {
          return error
        }
      
      default:
        break;
    }
  } catch (error) {
    return error.response
  }
  throw new Error('Critical Error');
}


