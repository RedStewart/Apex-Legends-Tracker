import React from 'react';
import { Layout } from 'antd';
import NavBarForm from './NavBarForm';
const { Header } = Layout;

const NavBar = () => {
  return (
    <Header className='navbar'>
      <NavBarForm />
    </Header>
  );
};

export default NavBar;
