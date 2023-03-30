import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';
import { Navbar } from "./ui/Navbar";


export const Hero = () => {
  return (
    <section id='home' className='snap-center h-full flex flex-col justify-between'>
      <Navbar />
      <div className="container h-screen snap-center flex flex-col md:flex-row justify-center md:justify-between gap-10 pt-10 px-2 mx-auto">
        {/* Text */}
        <div className='flex flex-col md:basis-1/2 gap-5 justify-center text-center'>
          <h1 className="text-4xl md:text-6xl text-slate-300 font-bold capitalize">think. make. solve.</h1>
          <div className='flex items-center gap-2 '> 
            <Image src={'/assets/line.png'} alt='line' width={50} height={10} />
            <span className="text-xl md:text-2xl text-pink-600 font-bold capitalize"> what I do</span>
          </div>
          <div >
            <p className="text-slate-200 ">I enjoy creating delightfull, human-centered digital experiences.</p>
            <button className="p-1 bg-pink-600 rounded-md capitalize font-bold md:hover:opacity-60 mt-3">learn more</button>
          </div>
        </div>
        {/* 3d Image */}
        <div className='relative md:basis-1/2 w-full h-[500px] lg:h-full'>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
              <Sphere args={[1,100,200]} scale={2.2}>
              <MeshDistortMaterial 
                color={'#3d1c56'}
                attach="material" 
                distort={0.5}
                speed={2}
                />
              </Sphere>
          </Canvas>
          <Image src={'/assets/moon.png'} alt={'moon image'} width={800} height={600} className='heroImg absolute inset-0 object-contain m-auto h-80 md:h-[550px] w-auto' priority />
        </div>
      </div>
    </section>
  )
}
