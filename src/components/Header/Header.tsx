import React, { useCallback } from 'react'

import { FiPower } from 'react-icons/fi'
import {Container, LeftSide} from './styles'

import LogoAS from '../../assets/LogoAS.svg'
import { useAuth } from '../../hook/auth'

const Header: React.FC = () => {

  const { signOut, masterSignOut, master, user } = useAuth();

  const exit = useCallback(() => {
    if (master){
      masterSignOut()
    }
    if (user) {
      signOut()
    }
  },[master, masterSignOut, signOut, user])

  return(
    <Container>
      <LeftSide>
        <img src={LogoAS} alt="logo" />
        <p>Agility in Solutions</p>
      </LeftSide>
      <button type="button" onClick={exit}>
        <FiPower />
      </button>
    </Container>
  )
}

export default Header
