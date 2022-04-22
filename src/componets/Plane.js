import React from "react";
import { usePlane } from "@react-three/cannon";

function Plane(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshStandardMaterial attach="material" color="peru" />
    </mesh>
  );
}

export default Plane;
