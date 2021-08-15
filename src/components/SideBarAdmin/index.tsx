import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrochip, FaRegBuilding } from 'react-icons/fa'

import { SideBar, SideBarContent, SideBarItem } from './styles';



const SideBarAdmin: React.FC = () => {
  return (
    <SideBar>
      <SideBarContent>
        <SideBarItem> 
          <Link to="/admin/companies">
            <div>
              <FaRegBuilding />
              <p>
                Empresas
              </p>
            </div>
          </Link>
        </SideBarItem>
        <SideBarItem>  
          <Link to="/admin/devices">
            <div>
              <FaMicrochip />
              <p>
                Devices
              </p>
            </div>
          </Link>
        </SideBarItem>
      </SideBarContent>
    </SideBar>
  );
};

export default SideBarAdmin;
