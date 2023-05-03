import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Body from "../body/Body";
import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import ExtraPart from "../ExtraPart";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      
      <Footer></Footer>
    </>
  );
};

export default Main;
