import React from "react";
import Footer from "./Footer";
import InsideAppHeader from "./InsideAppHeader";

const Layout = (props) => {
  return (
    <>
      <InsideAppHeader />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
