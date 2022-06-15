import React from "react";
import Octahedron from "./Octahedron";
import { Canvas } from "@react-three/fiber";
import "./ThreeCanvas.css";

const ThreeCanvas = () => {
  return (
    <Canvas className="three-canvas">
      <ambientLight color={"#642DF6"} />
      <pointLight position={[10, 13, 13]} />
      <Octahedron position={[0, 0, 0]} />
    </Canvas>
  );
};

export default ThreeCanvas;
