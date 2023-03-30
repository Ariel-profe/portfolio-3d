import { Stage, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model as Shoe } from '../Shoe'


export const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6} >
        <Shoe />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
