import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const WithNav = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default WithNav