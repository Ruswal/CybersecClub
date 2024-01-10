import React, { useState, useContext, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { animated } from "@react-spring/three";

const Hero = () => {
    const model = useLoader(GLTFLoader, "/computer.glb")
    const myRef = useRef();
    const [rotateX, setRotateX] = useState(0);
    useFrame(() => {
        setRotateX(rotateX + 0.01);
    })
    return (
        <animated.mesh rotation={[0, rotateX, 0]} position={[0, -1, 0]} ref={myRef}>
            <object3D scale={0.3}>
                <primitive object={model.scene} />
            </object3D>
        </animated.mesh>
    )
}

export default Hero;