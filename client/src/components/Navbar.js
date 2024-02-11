import React, { useEffect, useState, useContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useHistory } from "react-router-dom";
import { CiChat1 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/Cybersec_Art/logo.png";
import { AiOutlineTeam } from "react-icons/ai";
import { UserContext, backendUrl } from "../App";


const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="bg-transparent">
      <ul className="flex bg-transparent justify-between p-4 text-green-400">
        <li>
          <img onClick={() => navigate("/")} src={Logo} className="cursor-pointer h-16 p-2" alt="Logo" />
        </li>
        <div className="hidden md:flex gap-2 items-center">
          <li onClick={() => navigate("/team")} className="p-2 cursor-pointer">Team</li>
          <li onClick={() => navigate("/about-us")} className="p-2 cursor-pointer">About us</li>
          <li className="p-2 cursor-pointer">Resources</li>
          <li className="p-2 cursor-pointer">Discord</li>
        </div>
        <div className="md:hidden flex flex-col">
        <button onClick={toggleMenu} className="block text-green-400 focus:outline-none flex justify-end">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          {show && (
            <ul className="flex flex-col items-end text-center bg-transparent">
              <li onClick={() => navigate("/team")} className="p-2 cursor-pointer">Team</li>
              <li onClick={() => navigate("/about-us")} className="p-2 cursor-pointer">About us</li>
              <li className="p-2 cursor-pointer">Resources</li>
              <li className="p-2 cursor-pointer">Discord</li>
            </ul>
          )}
          
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
