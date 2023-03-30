import Image from 'next/image';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Cube } from './ui/Cube';


export const About = () => {
  return (
    <section id='about' className='snap-center h-screen flex justify-center'>
      <div className="container h-screen flex flex-col md:flex-row justify-center items-center mx-auto snap-center px-2">
        {/* 3d Model */}
        <div className='flex grow h-40 md:h-screen'>
          <Canvas camera={{fov:25, position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
              <Cube />
          </Canvas>
        </div>
        {/* Text */}
        <div className='flex flex-col grow items-center text-center justify-center'>
          <h1 className="text-4xl md:text-6xl text-slate-300 font-bold capitalize py-10">think outside the square space</h1>
          <div className='flex items-center gap-2 '> 
            <Image src={'/assets/line.png'} alt='line' width={50} height={10} />
            <span className="text-xl md:text-2xl text-pink-600 font-bold capitalize">who I am</span>
          </div>
          <div className='py-5'>
            <p className="text-slate-200 mb-5">A creative developer with a passion for the art of coding</p>
            <button className=" p-1 bg-pink-600 rounded-md capitalize font-bold md:hover:opacity-60">see my works</button>
          </div>
        </div>
      </div>
    </section>
  )
}
