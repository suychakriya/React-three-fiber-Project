import React from 'react';
import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { PerspectiveCamera } from '@react-three/drei';
import { Mesh } from 'three';

export function BedroomModel() {
  // <PerspectiveCamera makeDefault fov={30} near={1} far={5000} position={[-200, 400, -1000]} />
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/room/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set (1, 1, -1);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.cashShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return (
    <primitive object={gltf.scene} />
  )
}