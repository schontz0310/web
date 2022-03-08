import React from 'react';
import { useLoading } from '../../hook/spinner';

import {Container} from './styles'

const Dashboard: React.FC = () => {
  const {showLoading, removeLoading} = useLoading()
  return (
    <Container>
      <h1>DASHBOARD</h1>
      <h1>Vehicle</h1>
      <button type="button" onClick={() => showLoading()}>show</button>
      <button type="button" onClick={() => removeLoading()}>remove</button>
    </Container>
  );
};

export default Dashboard;
