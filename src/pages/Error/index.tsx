import React from 'react';
import Header from '../../components/Header/Header';

import { Container } from './styles';



const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <h1>error</h1>
    </Container>
  );
};

export default ErrorPage;
