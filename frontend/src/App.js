import { React } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';

import SignUp from "./scenes/Login/SignUp";
import PumpRegister from "./scenes/Register/PumpRegister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PumpRegister/:userid" element={<PumpRegister />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
