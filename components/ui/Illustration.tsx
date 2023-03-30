import { Stage, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model as Chair } from '../Chair'

export const Illustration = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6} >
        <Chair />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
