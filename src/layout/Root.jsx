import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../sharePage/Navbar';
import { Footer } from '../sharePage/Footer';

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

