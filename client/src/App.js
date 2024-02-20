import logo from "./logo.svg";
import "./App.css";
import Routers from "./Routers";
import React, { useState, useEffect, createContext, useContext } from "react";
import {ToastContainer, toast} from "react-toastify";

export const UserContext = createContext();
// export const backendUrl = "http://localhost:3001";
export const backendUrl = "https://uofrcybersecclub.onrender.com";
function App() {
  const [user, setUser] = useState({});
  // toast
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <ToastContainer style={{backgroundColor: "transparent"}} />
      <Routers />
    </UserContext.Provider>
  );
}

export default App;
