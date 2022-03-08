import React, {useState} from 'react';
import ActionHeader from '../../components/ActionHeader';
import {useLoading} from '../../hook/spinner'

import {Container, ContentContainer, FooterContainer} from './styles'

const Vehicle: React.FC = () => {
  const {showLoading, removeLoading} = useLoading()
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
        <button type="button" onClick={() => showLoading()}>show</button>
        <button type="button" onClick={() => removeLoading()}>remove</button>
      </ContentContainer>
      <FooterContainer />
    </Container>
  );
};

export default Vehicle;
