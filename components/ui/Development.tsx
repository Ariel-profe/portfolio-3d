import { Stage, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AmbientLight } from 'three'
import { Model as React } from '../React'

export const Development = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={2} />
        <Stage environment={"city"} intensity={0.6} >
            <React />
        </Stage>
        <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
