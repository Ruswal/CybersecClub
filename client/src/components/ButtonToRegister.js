import React, { useContext, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from "../firebase/firebase";
import Typewriter from "typewriter-effect";
import { UserContext, backendUrl } from "../App";
import ReactModal from "react-modal";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ButtonToRegister = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { user, setUser } = useContext(UserContext);
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  const createUser = async () => {
    // e.preventDefault();
    ;
    console.log(user);
    await axios
      .post(
        `${backendUrl}/api/user/createuser`,
        {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          major: major,
          year: year,
        },
        {
          headers: {
            Authorization: localStorage.getItem("auth_token"),
            email: user.email,
          },
        }
      )
      .then((res) => toast.success("Registered successfully!"));
  };
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const email = result.user.email;
      const image = result.user.photoURL;
      const name = result.user.displayName;
      const auth_token = result.user.accessToken;
      localStorage.setItem("auth_token", result.user.accessToken);
      await axios
        .get(`${backendUrl}/api/user/getuser`, {
          headers: {
            Authorization: auth_token,
            email: email,
          },
        })
        .then(async (res) => {
          console.log(res.data);
          setUser(res.data);
          if (res.status === 409) {
            console.log("loggedin successfully");
          } else if (res.status === 200) {
            console.log("loggedin successfully");
          } else if (res.status === 404) {
            setShowModal(true);
          }
        });
    } catch (err) {
      if (err.response.status === 404) {
        // toast.error("Something's wrong, please reload")
        setShowModal(true);
        // createUser();
      } else {
        console.log("Error", err);
        localStorage.removeItem("auth_token");
      }
    }
  };

  const getUser = async () => {
    const freshToken = await auth.currentUser.getIdToken(true);
    localStorage.setItem("auth_token", freshToken);
    await axios
      .get(`${backendUrl}/api/user/getuser`, {
        headers: {
          Authorization: freshToken,
          email: user.email,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        // if(err. === 404) {
        // console.log("User not found");
        // setShowModal(true);
        // } else if (err.response.status === 204) {
          if(err.response.status === 404) {
            // console.log("User not found", err);
            setShowModal(true);
          } else {
            console.log("Error", err);
            localStorage.removeItem("auth_token");
            window.location.reload();
          }
        // }
      });
  };

  useEffect(() => {
    if (Object.keys(user).length > 0 && !user.hasOwnProperty("major")) {
      // Check if the user is logged in and if major is not set
      getUser();
    }
  }, [user]);
  

  return (
    <>
      {showModal && (
        <ReactModal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            content: {
              backgroundColor: "#1F2937",
              color: "white",
              border: "none",
              borderRadius: "10px",
              //   width: "50%",
              maxWidth: "500px",
              height: "50%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            },
          }}
        >
          <div className="flex justify-center bg-transparent items-center">
            <label className="text-2xl bg-transparent font-semibold text-green-400">
              Major:
            </label>
            <input
              className="ml-2 p-2 rounded-md text-green-500 bg-gray-900"
              type="text"
              placeholder="Enter your major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </div>
          <div className="flex bg-transparent justify-center items-center">
            <label className="text-2xl bg-transparent font-semibold text-green-400">
              Year:
            </label>
            <input
              className="ml-6 p-2 rounded-md text-green-500 bg-gray-900"
              type="number"
              placeholder="Enter your year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              max={5}
              min={1}
            />
          </div>
          <div className="flex bg-transparent justify-center items-center">
            <button
              className="bg-gray-900 text-2xl font-semibold mt-4 hover:text-green-500 cursor-pointer text-green-400 p-2 rounded-md"
              onClick={async () => {
                setShowModal(false);
                await createUser();
              }}
            >
              <h1 className="bg-transparent">Submit</h1>
            </button>
          </div>
        </ReactModal>
      )}
      <div className="flex items-center justify-center absolute bg-transparent">
        {!showModal && (
          <div className="z-[99999] bg-transparent absolute md:ml-[-300px] sm:ml-[-300px] ml-[-100px] mt-[-200px] items-start flex justify-start text-green-400 text-3xl">
            <Typewriter
              style={{ backgroundColor: "transparent" }}
              className="bg-transparent"
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to UofR Cybersecurity Club!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString(
                    "We are a club dedicated to learning about cybersecurity."
                  )
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </div>
        )}
        {!showModal && Object.keys(user).length === 0 && (
          <div
            onClick={signIn}
            className="bg-gray-900 hover:text-green-500 cursor-pointer text-green-400 p-2 rounded-md"
          >
            <h1 className="bg-transparent">Register</h1>
          </div>
        )}
        <div className="bg-transparent">
          {Object.keys(user).length !== 0 && !showModal && (
            <h1 className="text-green-500 bg-transparent text-2xl ml-[-50px] gap-4">
              Hello{" "}
              <span className="bg-gray-900 w-full rounded-md p-1">
                {user.name  || "Hacker"}
              </span>
              !
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ButtonToRegister;
