import React from 'react';
import Header from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom';
const AppLayout = () => {
    return (
       <>
       <Header/>
       <div className="container mt-5">
       <Outlet/>
       </div>
       
      
       </>
    );
}

export default AppLayout;
