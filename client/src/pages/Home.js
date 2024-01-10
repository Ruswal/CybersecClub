import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Hero from '../components/Hero';
import ButtonToRegister from '../components/ButtonToRegister';

const Home = () => {
  return (
    <div>
      <Canvas style={{height: "100vh", backgroundColor: "black"}}>
        <OrbitControls />
        <ambientLight intensity={1} />
        <Hero />
        <ButtonToRegister />
      </Canvas>
    </div>
  )
}

export default Home