import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import Events from "./pages/Events";
import RegisterForSingleEvent from "./pages/SingleEvent";
import { UserContext } from "./App";
import { useContext } from "react";
import CTF from "./pages/Ctf";

const Routers = () => {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />}/>
        <Route path="/about-us" element={<About />} />
        <Route path="/events" element={Object.keys(user).length > 0 ? <Events /> : <Home />} />
        <Route path="/event/:id" element={<RegisterForSingleEvent />} />
        <Route path="/ctf" element={<CTF />} />
       </Routes>
    </BrowserRouter>
  );
};

export default Routers;
