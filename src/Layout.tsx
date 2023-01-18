import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div style={{ width: '100%', height: 'auto', background: '#dcdcdd' }}>
        <h1>Diary</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
