import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Octahedron = (props) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => [
    (mesh.current.rotation.x += 0.003),
    (mesh.current.rotation.y += 0.003),
  ]);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <octahedronGeometry args={[3, 0]} />
      <meshBasicMaterial
        wireframe={true}
        color={hovered ? "hotpink" : "#00d517"}
      />
    </mesh>
  );
};

export default Octahedron;
