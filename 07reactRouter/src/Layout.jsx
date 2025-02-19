import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      {/* Outlet is used for nesting in react router doms 
    
    here in the sequence -> 
    <Header/>
    <Outlet/>
    <Footer/>

    the single page will execute the header at the top, footer at the bootom and the other content
    i.e. the outlet in the middle section
    
    */}
    </>
  );
}

export default Layout;
