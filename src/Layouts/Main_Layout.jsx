import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Main_Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="pt-20 max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main_Layout;
