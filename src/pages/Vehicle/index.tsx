import React from 'react';
import ActionHeader from '../../components/ActionHeader';

import {Container, ContentContainer, FooterContainer} from './styles'

const Vehicle: React.FC = () => {
  return (
    <Container>
      <ActionHeader 
        buttonFilter
        buttonRegister
        registerbuttonClick={() => console.log('clicou')}
      />
      <ContentContainer>
        <h1>Vehicle</h1>
      </ContentContainer>
      <FooterContainer />
    </Container>
  );
};

export default Vehicle;
