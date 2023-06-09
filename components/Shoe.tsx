/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shoe.gltf --transform
Author: DineshThennarasan (https://sketchfab.com/dineshthennarasan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-shoe-cb083d55793e44638c4a598c65edaed3
Title: Nike Shoe
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props:any) {
  const { nodes, materials }:any = useGLTF('/shoe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-134.99, -17.37, 5.16]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials['706a6a']} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.Physical11} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Physical12} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Physical15} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.Physical12} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Standard5} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.Standard6} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.Physical12} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.ffffff} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.Physical12} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.Physical7} />
          <mesh geometry={nodes.Object_34.geometry} material={materials.Physical7} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/shoe-transformed.glb')
