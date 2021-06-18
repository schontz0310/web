import { useQuery, UseQueryResult } from "react-query"
import api, { HTTPMethod, Recurse } from "../api"



async function get(data: unknown, recurse: Recurse): Promise<unknown> {
  try{
    const response = await api.get(`/${recurse}`)
    console.log(response)
    return response
  }catch(error){
    throw new Error(error);
  }
}

export function useFetch( data: unknown, method: HTTPMethod, recurse: Recurse): UseQueryResult<void>{
  const response  = useQuery(`${recurse}`, () => {
    switch (method) {
      case HTTPMethod.get :
        get(data, recurse)
        break;
      default:
        break;
    }
  })
  return response
}


