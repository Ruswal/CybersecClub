import React from "react";
import { Html } from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from "../firebase/firebase";
import Typewriter from "typewriter-effect";

const ButtonToRegister = () => {

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Html>
            <div className=" absolute ml-[-300px] mt-[-200px] items-start flex justify-start text-green-400 text-3xl">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Welcome to UofR Cybersecurity Club!')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('We are a club dedicated to learning about cybersecurity.')
                            .start()
                    }}
                    options={{
                        loop: true,
                    }}
                />
            </div>
            <div onClick={signIn} className="bg-gray-900 hover:text-green-500 cursor-pointer text-green-400 p-2 rounded-md">
                <h1>Register</h1>
            </div>
        </Html>
    )
}

export default ButtonToRegister;