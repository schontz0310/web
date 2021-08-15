/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { Console } from "console"
import { useState } from "react"

import {PaginationContainer, CurentButtonBox, BlockBox} from './styles'

/* eslint-disable react/require-default-props */
interface IPaginationProps {
  totalRegisters: number;
  registerPerPage?: number;
  currentPage: number;
  changePage: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_,index) => {
    return from + index + 1
  }).filter(page => page > 0)
}

export function Pagination({
  totalRegisters,
  registerPerPage = 6,
  currentPage = 1,
  changePage,
}:IPaginationProps): JSX.Element {

  const [siblingsPages] = useState(2)

  const lastPage = Math.ceil(totalRegisters / registerPerPage)
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsPages, currentPage -1)
    : []
  console.log({previousPages})
  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsPages, lastPage))
  : []
  console.log({nextPages})

  const previosBlocks = (siblingsPages + 2) - currentPage >= 0 
    ? (currentPage + siblingsPages) < lastPage
      ? [...new Array((siblingsPages + 3) - currentPage)]
      : [...new Array((siblingsPages + 2) - currentPage)]
    : []
   
  
  const nextBlocks = ((siblingsPages + 1) - (lastPage - currentPage)) >= 0
    ? [...new Array((siblingsPages + 2) - (lastPage - currentPage))]
    : []
  return(
    <>
      {(totalRegisters / registerPerPage) > 1 && (
      <PaginationContainer>
        {
          (previousPages.length + previosBlocks.length) < 4 && !(currentPage > (2 +siblingsPages)) && (
            <BlockBox key={0}>
              <p>...</p> 
            </BlockBox>
          )
        }
        {previosBlocks.length > 0 && previosBlocks.map( (_,index) => {
        return (
          <BlockBox key={index}>
            <p>...</p> 
          </BlockBox>
        )
      })}
        {currentPage > ( 1 + siblingsPages ) && (
        <>
          <button type="button" onClick={() => changePage(1)}>{1}</button>
          {currentPage > (2 +siblingsPages) && (
          <BlockBox>
            <p>...</p> 
          </BlockBox>
        )}
        </>
      )}
        {previousPages.length > 0 && previousPages.map(page => {
        return (
          <button key={page} type="button" onClick={() => changePage(page)}>
            {page}
          </button>
        )
      })}
        <CurentButtonBox>
          <p>
            {currentPage}
          </p>
        </CurentButtonBox>
        {nextPages.length > 0 && nextPages.map(page => {
        return (
          <button key={page} type="button" onClick={() => changePage(page)}>
            {page}
          </button>
        )
      })}
        {(currentPage + siblingsPages) < lastPage  && (
        <>
          {(currentPage + 1 + siblingsPages) < lastPage && (
          <BlockBox>
            <p>...</p> 
          </BlockBox>
        )}
          <button type="button" onClick={() => changePage(lastPage)}>{lastPage}</button>
        </>
      )}
        {nextBlocks.length > 0 && nextBlocks.map( (_,index) => {
        return (
          <BlockBox key={index}>
            <p>...</p> 
          </BlockBox>
        )
      })}
      
      </PaginationContainer>
    )}
    </>
  )
}