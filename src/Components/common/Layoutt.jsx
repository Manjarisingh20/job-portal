
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layoutt = ({ children }) => {
  return (
    <div  >
      <div className="bg-black">
        <Navbar />
      </div>
      <main >{children}</main>
      
    </div>
  );
};

export default Layoutt;
