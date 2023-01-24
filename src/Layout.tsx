import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from './Pages/Intro/Login';
import Header from './Pages/layout/Header';
import Footer from './Pages/layout/Footer';

const Layout = () => {
  return (
    <>
      <div style={{ width: '100%', height: 'auto', background: '#dcdcdd' }}>
        <Header></Header>

        <Footer></Footer>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
