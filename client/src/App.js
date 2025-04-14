import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";  

import LoginPage from "./pages/login";
import Header from "./components/header"; 
import CreateAccount from "./pages/createaccount";
import ForgotPassword from "./pages/forgotpassword";
import Ongoing from "./pages/ongoing";
import Calendar2025 from "./pages/calendar2025";
import Community from "./pages/community";
import Settings from "./pages/settings";
import Upcoming from "./pages/upcoming";
import Archive from "./pages/archive";
import AboutUs from "./pages/aboutus";
import Account from "./pages/account";
import Jan from "./pages/jan"

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};
  
const MainLayout = () => {
  const location = useLocation();
  const isOnStart = location.pathname === "/login" || location.pathname === "/createaccount" || location.pathname === "/forgotpassword";; // Check if on login/signup

  return (
    <div className="app">
      {!isOnStart && <LoginPage />} {/* Hide Header on login & signup pages */}
      
      <Routes>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/ongoing" element={<Ongoing />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/calendar2025" element={<Calendar2025 />} />
      <Route path="/events/january" element={<Jan/>}/>
      <Route path="/community" element={<Community/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/account" element={<Account/>}/>
      
      </Routes>


    </div>
  );
};

export default App;
