/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, UseQueryResult } from "react-query"
import api, { Recurse } from "../api";

interface ResponseResult<T> {
  totalRegisters: number | undefined,
  fullData: T[],
}

async function getAllCompanies<T>(): Promise<T[]> { 
  const response = await api.get(Recurse.findAllCompanies)
  return response.data
  
}

export function findAllCompanies<T>(): ResponseResult<T> {
  const {data}  = useQuery(
    ['companies'], 
    () => getAllCompanies<T>(),
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