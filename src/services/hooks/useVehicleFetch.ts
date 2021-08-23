/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, UseQueryResult } from "react-query"
import api, { Recurse } from "../api";

interface ResponseResult<T> {
  totalRegisters: number | undefined,
  fullData: T[],
}

async function getAllVehicles<T>(): Promise<T[]> { 
  const response = await api.get(Recurse.findAllVehicles)
  return response.data
}

export function findAllVehicles<T>(): ResponseResult<T> {
  const {data}  = useQuery(
    ['vehicle-list'], 
    () => getAllVehicles<T>(),
    {
      staleTime: 1000 * 5
    }  
  ) as UseQueryResult<T[]>
  
  const totalRegisters = data?.length
  return {
    totalRegisters,
    fullData: data || []
  }
}