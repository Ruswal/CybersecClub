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
  const { user, setUser } = useContext(UserContext);

  // const createUser = async () => {
  //   await axios
  //     .post(
  //       `${backendUrl}/api/user/createuser`,
  //       {
  //         name: user.displayName,
  //         email: user.email,
  //         image: user.photoURL,
  //         major: major,
  //         year: year,
  //       },
  //       {
  //         headers: {
  //           Authorization: localStorage.getItem("auth_token"),
  //           email: user.email,
  //         },
  //       }
  //     )
  //     .then((res) => toast.success("Registered successfully!"));
  // };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userInside) => {
      if (Object.keys(userInside).length > 0 && Object.keys(user).length === 0) {
        setUser(userInside);
        if (localStorage.getItem("auth_token") === null) {
          userInside.getIdToken().then((token) => {
            localStorage.setItem
              ("auth_token", token);
          }
          );
        }
      } else {
        console.log("no user");
      }
    });
  }, []);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="bg-transparent">
      <ul className="flex bg-transparent justify-between p-2 px-4 text-green-400">
        <li>
          <img onClick={() => navigate("/")} src={Logo} className="cursor-pointer h-16 p-2" alt="Logo" />
        </li>
        <div className="hidden md:flex gap-2 items-center">
          <li onClick={() => navigate("/team")} className="p-2 cursor-pointer">Team</li>
          <li onClick={() => navigate("/about-us")} className="p-2 cursor-pointer">About us</li>
          <li onClick={() => navigate("/events")} className="p-2 cursor-pointer">Events</li>
          <li className="p-2 cursor-pointer"><a href="https://discord.gg/46w4C6ApzF" target="_blank">Discord</a></li>
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
              {Object.keys(user).length > 0 && (
                <li onClick={() => navigate("/events")} className="p-2 cursor-pointer">Events</li>
              )}
              <li className="p-2 cursor-pointer"><a href="https://discord.gg/46w4C6ApzF" target="_blank">Discord</a></li>
            </ul>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
