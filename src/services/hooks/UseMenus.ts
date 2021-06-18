/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { User } from "../../hook/auth"
import api from "../api"






async function getMenus(user: User): Promise<any> {
  try{
    const response: AxiosResponse<any> = await api.get(`/menus?user=${user.id}`)
    return response
  }catch(error){
    throw new Error(error);

  }
}

export function useMenus(user: User){
  const response  = useQuery(['menus', user.name], () => getMenus(user))
  return response
}




