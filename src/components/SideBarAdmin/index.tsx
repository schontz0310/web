import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrochip, FaRegBuilding } from 'react-icons/fa'

import { SideBar, SideBarContent, SideBarItem, IconContainer, SideBarItemContainer} from './styles';



const SideBarAdmin: React.FC = () => {
  return (
    <SideBar>
      <SideBarContent>
        <SideBarItem> 
          <Link to="/admin/companies">
            <SideBarItemContainer>
              <IconContainer>
                <FaRegBuilding />
              </IconContainer>
              <p>
                Empresas
              </p>
            </SideBarItemContainer>
          </Link>
        </SideBarItem>
        <SideBarItem>  
          <Link to="/admin/devices">
            <SideBarItemContainer>
              <IconContainer>
                <FaMicrochip />
              </IconContainer>
              <p>
                Devices
              </p>
            </SideBarItemContainer>
          </Link>
        </SideBarItem>
        <SideBarItem>  
          <Link to="/admin/dashboard">
            <SideBarItemContainer>
              <IconContainer>
                <FaMicrochip />
              </IconContainer>
              <p>
                Devices
              </p>
            </SideBarItemContainer>
          </Link>
        </SideBarItem>
      </SideBarContent>
    </SideBar>
  );
};

export default SideBarAdmin;
