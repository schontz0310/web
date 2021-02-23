import React from 'react';
import Header from '../../components/Header/Header';
import { Container, SideBar } from './styles';



const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Header />
    </Container>
  );
};

export default Dashboard;
