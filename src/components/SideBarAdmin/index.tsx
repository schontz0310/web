import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegBuilding } from 'react-icons/fa'

import { Container, SideBar, SideBarContent, SideBarItem } from './styles';



const SideBarAdmin: React.FC = () => {
  return (
    <SideBar>
      <SideBarContent>
        <SideBarItem>
          <Link to="/admin/companies">
            <div>
              <FaRegBuilding />
              Empresas
            </div>
          </Link>
        </SideBarItem>
      </SideBarContent>
    </SideBar>
  );
};

export default SideBarAdmin;
