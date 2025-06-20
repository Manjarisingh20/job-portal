// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/auth/Register";
import Verify from "./Pages/auth/Verify";
import Login from "./Pages/auth/Login";
import ForgotPass from "./Pages/auth/ForgotPass";
import Reset from "./Pages/auth/Reset";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />}/>
        <Route path="/reset" element={<Reset />}/>

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
