import { AxiosResponse } from "axios"
import { CreateCompanyFormData } from "../../pages/Company"
import api, { HTTPMethod, Recurse } from "../api"



async function post(createCompany: CreateCompanyFormData, recurse: Recurse): Promise<AxiosResponse<any>> {
  try{
    const response = await api.post(`/${recurse}`, createCompany)
    return response
  }catch(error){
    return error.response
  }
}

export async function useApi( data: CreateCompanyFormData, method: HTTPMethod, recurse: Recurse):
Promise<AxiosResponse<any>>
{
  let response: AxiosResponse
  try {
    switch (method) {
      case HTTPMethod.post :
        try {
          response = await post(data, recurse)
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


