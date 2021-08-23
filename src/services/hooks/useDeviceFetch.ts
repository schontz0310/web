/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, UseQueryResult } from "react-query"
import api, { Recurse } from "../api";

interface ResponseResult<T> {
  totalRegisters: number | undefined,
  fullData: T[],
}

async function getAllDevices<T>(): Promise<T[]> { 
  const response = await api.get(Recurse.findAllDevices)
  return response.data
  
}

export function findAllDevices<T>(): ResponseResult<T> {
  const {data}  = useQuery(
    ['deviceslist'], 
    () => getAllDevices<T>(),
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