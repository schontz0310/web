/* eslint-disable react/prop-types */
import React, { useContext, createContext, useCallback, useState } from 'react';


interface PaginationContextData<T> {
  page: number,
  perPage: number,
  pageData: T[],
  totalRegisters: number;
  fullData: T[],
  addPagination(data: AddPropsPagination<T>): void
}

interface AddPropsPagination<T> {
  records: T[],
  toPage: number,
  toPerPage: number
}

const PaginationContext = createContext({} as PaginationContextData<unknown>);

export const PaginationProvider: React.FC = ({ children }) => {
  const [fullData, setFullData] = useState([] as unknown[]);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(8);
  const [pageData, setPageData] = useState([] as unknown[]);
  const [totalRegisters, setTotalRegisters] = useState<number>(0)

  const addPagination = useCallback(({records, toPage, toPerPage} : AddPropsPagination<unknown>) => {
    
    setFullData(records)
    setPage(toPage)
    setPerPage(toPerPage)

    const registerCount = records.length
    
    setTotalRegisters(registerCount)

    const start = (toPage -1) * toPerPage
    const end = start + toPerPage

    const PageValues = records.splice(start, end) as []
    setPageData(PageValues)

  }, []);
  
  return (
    <PaginationContext.Provider value={{ 
      addPagination,
      page,
      fullData,
      pageData,
      perPage,
      totalRegisters,
    }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export function usePagination<T>(): PaginationContextData<T> {
  const context = useContext<PaginationContextData<unknown>>(PaginationContext);

  if (!context) {
    throw new Error('usePagination must be used within an PaginationProvider');
  }

  return context as PaginationContextData<T>;
}
