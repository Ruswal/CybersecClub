import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import Events from "./pages/Events";
import RegisterForSingleEvent from "./pages/SingleEvent";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />}/>
        <Route path="/about-us" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<RegisterForSingleEvent />} />
       </Routes>
    </BrowserRouter>
  );
};

export default Routers;
