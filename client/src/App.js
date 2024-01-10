import logo from "./logo.svg";
import "./App.css";
import Routers from "./Routers";
import React, { useState, useEffect, createContext, useContext } from "react";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Routers />
    </UserContext.Provider>
  );
}

export default App;
