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


const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const id = window.location.pathname;

  return (
    <div className="bg-transparent">
      <ul className="flex bg-transparent justify-between p-4 text-green-400">
        <li>
          <img onClick={() => navigate("/")} src={Logo} className="cursor-pointer h-16 p-2" />
        </li>
        <ul className="flex gap-2 items-center">
          <li onClick={() => navigate("/team")} className="p-2 cursor-pointer">Team</li>
          <li onClick={() => navigate("/about-us")} className="p-2 cursor-pointer">About us</li>
          <li className="p-2 cursor-pointer">Resources</li>
          <li className="p-2 cursor-pointer">Discord</li>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
