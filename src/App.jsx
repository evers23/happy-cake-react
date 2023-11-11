import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// importar componentes

import Navbar from "./components/Navbar";

import { Home } from "./views/Home";
import Contacto from "./views/Contacto";

// componente App
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />

          <Route path="*" element={<Navigate replace to="/Home/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
