import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div style={{ width: '100%', height: '30px', background: 'pink' }}>렌더링이 잘 되는가</div>
      <Outlet />
    </>
  );
};

export default Layout;
