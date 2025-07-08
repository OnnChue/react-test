import React from "react";
import Header from "./header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        toastOptions={{
          duration: 500,
        }}
      />
    </>
  );
};

export default MainLayout;
