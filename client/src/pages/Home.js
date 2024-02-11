import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hero from '../components/Hero';
import ButtonToRegister from '../components/ButtonToRegister';

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Suspense fallback={<div><div className='m-auto inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' role="status"><span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>Loading...</span></div><div className='inline-block h-12 w-12 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]' role='status'><span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>Loading...</span></div></div>}>
        <Canvas style={{ height: "100vh", backgroundColor: "black" }}>
          <OrbitControls enablePan={false} enableZoom={false} />
          <ambientLight intensity={1} />
          <spotLight intensity={80} position={[0, 3, 0]}/>
          <Hero />
        </Canvas>
        <ButtonToRegister />
      </Suspense>
    </div>
  )
}

export default Home