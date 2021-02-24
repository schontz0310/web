import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaRegBuilding } from 'react-icons/fa'

import Header from '../../components/Header/Header';
import { Container, SideBar, SideBarContent, SideBarItem } from './styles';



const Admin: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <SideBarContent>
          <SideBarItem>
            <Link to="/admin/companies">
              <FaRegBuilding />
              Empresas
            </Link>
          </SideBarItem>
        </SideBarContent>
      </SideBar>
      <Header />
    </Container>
  );
};

export default Admin;
