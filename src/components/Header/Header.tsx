import React from 'react'

import { FiPower } from 'react-icons/fi'
import {Container, LeftSide} from './styles'

import LogoAS from '../../assets/LogoAS.svg'
import { useAuth } from '../../hook/auth'

const Header: React.FC = () => {

  const { signOut } = useAuth();

  return(
    <Container>
      <LeftSide>
        <img src={LogoAS} alt="logo" />
        <p>Agility in Solutions</p>
      </LeftSide>
      <button type="button" onClick={signOut}>
        <FiPower />
      </button>
    </Container>
  )
}

export default Header
