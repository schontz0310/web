import React from 'react';
import { FaIdBadge } from 'react-icons/fa';
import { GiMineTruck } from 'react-icons/gi';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { SideBarContent, SideBar, SideBarItem } from './styles';



const SideBarApp: React.FC = () => {
  return (
    <SideBar>
      <SideBarContent>
        <SideBarItem>
          <Link to="/dashboard">
            <div>
              <MdDashboard />
              <p>
                Dashboard
              </p>
            </div>
          </Link>
        </SideBarItem>
        <SideBarItem>
          <Link to="/operators">
            <div>
              <FaIdBadge />
              <p>
                Operadores
              </p>
            </div>
          </Link>
        </SideBarItem>
        <SideBarItem>
          <Link to="/vehicles">
            <div>
              <GiMineTruck />
              <p>
                Veículos
              </p>
            </div>
          </Link>
        </SideBarItem>
      </SideBarContent>
    </SideBar>
  );
};

export default SideBarApp;
