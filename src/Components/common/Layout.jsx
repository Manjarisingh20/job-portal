
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div  >
      <div className="bg-black">
        <Navbar />
      </div>
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
