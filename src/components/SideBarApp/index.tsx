import React from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { SideBarContent, SideBar, SideBarItem } from './styles';



const SideBarApp: React.FC = () => {
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

export default SideBarApp;
