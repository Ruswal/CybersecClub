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
  const [major, setMajor] = useState("Computer Science");
  const [year, setYear] = useState(1);
  const [studentId, setStudentId] = useState("");
  const [universityEmail, setUniversityEmail] = useState("");

  const createUser = async () => {
    // validate the major, year, studentId, universityEmail
    if (major === "" || year === null) {
      console.log("Please fill in all the fields", major, year);
      toast.error("Please fill in all the fields");
      return;
    }

    await axios
      .post(
        `${backendUrl}/api/user/createuser`,
        {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          major: major,
          year: year,
          studentId: studentId,
          universityEmail: universityEmail + "@uregina.ca",
        },
        {
          headers: {
            Authorization: localStorage.getItem("auth_token"),
            email: user.email,
          },
        }
      )
      .then((res) => {
        toast.success("Registered successfully!");
        setShowModal(false);
      });
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

  useEffect(() => {
    console.log(major, year);
  }, [major, year]);


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
          <div className="flex justify-between items-center w-full px-4 bg-transparent">
            <label className="text-2xl font-semibold text-green-400 bg-transparent">Major:</label>
            <select
              className="p-2 w-48 rounded-md text-green-500 bg-gray-900"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Information Systems">Information Systems</option>
              <option value="Information Security">Information Security</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Computer Science and Security">
                Software Systems Development
              </option>
              <option value="Software Engineering and Security">
                Software Engineering and Security
              </option>
              <option value="CTCH">CTCH</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex justify-between items-center w-full px-4 bg-transparent">
            <label className="text-2xl font-semibold text-green-400 bg-transparent">Year:</label>
            <input
              className="p-2 w-48 rounded-md text-green-500 bg-gray-900"
              type="number"
              placeholder="Enter your year"
              value={year}
              onChange={(e) => {
                if (
                  e.target.value >= 1 &&
                  e.target.value <= 5 &&
                  e.target.value !== ""
                ) {
                  setYear(e.target.value);
                } else {
                  setYear(year);
                }
              }}
              max={5}
              min={1}
            />
          </div>
          <div className="flex justify-between items-center w-full px-4 bg-transparent">
            <label className="text-2xl font-semibold text-green-400 bg-transparent">
              Student ID:
            </label>
            <input
              className="p-2 w-48 rounded-md text-green-500 bg-gray-900"
              type="text"
              placeholder="Enter your student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center w-full px-4 bg-transparent">
            <label className="text-2xl font-semibold text-green-400 bg-transparent">Email:</label>
            <div className="flex items-center bg-transparent">
              <input
                className="p-2 w-48 rounded-md text-green-500 bg-gray-900"
                type="text"
                placeholder="University email"
                value={universityEmail}
                onChange={(e) => {
                  if (e.target.value.includes("@")) {
                    setUniversityEmail(e.target.value.split("@")[0]);
                  } else {
                    setUniversityEmail(e.target.value);
                  }
                }}
              />
              <p className="text-green-400 text-lg bg-transparent">@uregina.ca</p>
            </div>
          </div>
          <button
            className="bg-gray-900  text-2xl font-semibold mt-4 hover:text-green-500 cursor-pointer text-green-400 p-2 rounded-md"
            onClick={async () => {
              await createUser();
            }}
          >
            <h1 className="bg-transparent">Submit</h1>
          </button>
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
                {user.name || "Hacker"}
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
