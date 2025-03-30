import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";  
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"; // Import Signup Page

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup"; // Check if on login/signup

  return (
    <div className="app">
  
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} /> {/* Add Signup Page Route */}
      </Routes>
    </div>
  );
};

export default App;