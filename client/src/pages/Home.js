import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Canvas style={{height: "100vh"}}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <Hero />
      </Canvas>
    </div>
  )
}

export default Home