import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Navbar, Register, Login } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
