import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React,{ Suspense } from "react";
// import { SkyBox } from "./skybox.jsx";
import { BedroomModel } from "./BedroomModel.jsx";


export function SceneContainer() {
  return (
    
    <Suspense fallback={null}>
      
      {/* <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
      <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap.hdr"} /> */}

      <PerspectiveCamera makeDefault fov={40} near={1} far={1000} position={[0, 300, 500]} />
      <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 1}/>
      <ambientLight intensity={0.5} />
      <directionalLight
        color="white"
        intensity={1}
        position={[0, 10, 5]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

    
        <BedroomModel />
        {/* <SkyBox/> */}
       
    </Suspense>
  );
}
