import { React } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';

import SignUp from "./scenes/Login/SignUp";
import PumpRegister from "./scenes/Register/PumpRegister";
import Home from "./scenes/Home/Home";
import Webhome from "./scenes/components/Webhome/Webhome";
import Navbar from "./scenes/components/Navbar/Navbar";
import ContactUs from "./scenes/components/ContactUs/ContactUs";
import Features from "./scenes/components/Features/Features";
import AboutUs from "./scenes/components/About/AboutUs"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PumpRegister/:userid" element={<PumpRegister />} />



          <Route path="/Home" element={<WithNavbar><Webhome /></WithNavbar>} />
          <Route path="/Features" element={<WithNavbar><Features /></WithNavbar>} />
          <Route path="/ContactUs" element={<WithNavbar><ContactUs /></WithNavbar>} />
          <Route path="/AboutUs" element={<WithNavbar><AboutUs /></WithNavbar>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

function WithNavbar({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default App;
