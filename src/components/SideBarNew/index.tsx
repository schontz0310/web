import React from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hook/auth';
import { useMenus } from '../../services/hooks/UseMenus';

import { Container, SideBarContent, SideBar, SideBarItem } from './styles';



const SideBarApp: React.FC = () => {
  return (
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
  );
};

export default SideBarApp;
