import { useThree } from "@react-three/fiber";
import {CubeTextureLoader } from "three";
import * as THREE from 'three';



export function SkyBox() {
  
      const { scene } = useThree();
      const loader = new CubeTextureLoader();
      // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
      const texture = loader.load([
        "./skybox_image/Pic2.png",
        "./skybox_image/Pic4.png",
        "./skybox_image/Pic5.png",
        "./skybox_image/Pic6.png",
        "./skybox_image/Pic1.png",
        "./skybox_image/Pic3.png"
      ]);
    
      // Set the scene background property to the resulting texture.
      texture.encoding = THREE.sRGBEncoding;
      scene.background = texture;
     
      return null;
    
}