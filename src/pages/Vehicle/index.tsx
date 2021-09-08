import React, {useState} from 'react';
import ActionHeader from '../../components/ActionHeader';

import {Container, ContentContainer, FooterContainer} from './styles'

const Vehicle: React.FC = () => {
  const [modal, setmodal] = useState<boolean>()
  return (
    <Container>
      <ActionHeader 
        buttonFilter
        buttonRegister
        registerbuttonClick={() => modal && setmodal(false)}
      />
      <ContentContainer>
        <h1>Vehicle</h1>
      </ContentContainer>
      <FooterContainer />
    </Container>
  );
};

export default Vehicle;
