import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App"; // Your landing page component
import Login from "./components/Login/Login"; // Your Login component

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default Main;