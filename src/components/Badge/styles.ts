/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import { Collors } from '../../styles/parameters';



interface ContainerProps {
  status: string;
}



export const Container = styled.aside<ContainerProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  aside{
    ${props =>
      props.status === 'inactive' 
      ? css`
          background-color: ${Collors.deviceStatus.inactive};
        `
      : props.status === 'active'
        ?   css`
              background-color: ${Collors.deviceStatus.active};
            `
        : props.status === 'pending'
          ?   css`
                background-color: ${Collors.deviceStatus.pending};
              `
          :   css`
                background-color: ${Collors.deviceStatus.blocked};
              `       
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    padding: 4px;
    max-height: 26px;
    border-radius: 6px;
  }
  h6{
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`