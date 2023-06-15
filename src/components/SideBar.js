import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import SideBarcss from '../components/SideBar.css'
import { connect } from 'react-redux';


const SideBar = ({user}) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuHover = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div style={{position:'fixed', marginTop:'-75px', display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            
            {user ? ( 
            <div style={{color:'white', fontSize:'18px', fontWeight:'500'}}>
              Welcome {user.name}
            </div>
          ): 
          <div>
       Welcome aboard
          </div>
          }
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onMouseEnter={() => handleMenuHover('introduction')}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <CDBSidebarMenuItem
                className={activeMenuItem === 'introduction' ? 'active-menu' : ''}
                icon="columns"
              >
                Introduction
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/about"
              activeClassName="activeClicked"
              onMouseEnter={() => handleMenuHover('about')}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <CDBSidebarMenuItem
                className={activeMenuItem === 'about' ? 'active-menu' : ''}
                icon="table"
              >
                About
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/team"
              activeClassName="activeClicked"
              onMouseEnter={() => handleMenuHover('team')}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <CDBSidebarMenuItem
                className={activeMenuItem === 'team' ? 'active-menu' : ''}
                icon="user"
              >
                Team
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/enterDetail"
              activeClassName="activeClicked"
              onMouseEnter={() => handleMenuHover('loginPage')}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <CDBSidebarMenuItem
                className={activeMenuItem === 'loginPage' ? 'active-menu' : ''}
                icon="columns"
              >
                Login Page
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/newUsers"
              activeClassName="activeClicked"
              onMouseEnter={() => handleMenuHover('newUsers')}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <CDBSidebarMenuItem
                className={activeMenuItem === 'newUsers' ? 'active-menu' : ''}
                icon="columns"
              >
                New Users
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px' }}>Arthmate Tech</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

// export default SideBar;
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SideBar);
