import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model as Tablet } from "../Tablet"


export const WebDesign = () => {
  return (
    <>
      <Canvas>
          <Stage environment={"city"} intensity={0.6} >
              <Tablet />
          </Stage>
          <OrbitControls enableZoom={false} />
      </Canvas>
      <p className="absolute bottom-0 lg:top-1 lg:right-1 bg-slate-400/60 p-2 rounded-md w-80 h-28">I design products with a strong focus on both world class design and ensuring your product is a market success</p>
    </>
  )
}
