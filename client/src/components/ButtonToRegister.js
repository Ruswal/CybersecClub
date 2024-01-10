import React from "react";
import { Html } from "@react-three/drei";
import { useSpring } from "@react-spring/three";

const ButtonToRegister = () => {
    return (
        <Html>
            <div onClick={() => console.log("so,esdasd")} className="bg-gray-900 text-green-400 p-2 rounded-md">
                <h1>Register</h1>
            </div>
        </Html>
    )
}

export default ButtonToRegister;