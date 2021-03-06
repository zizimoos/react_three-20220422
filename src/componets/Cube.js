import React, { useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";

function Cube(props) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  function onClick() {
    setActive(!active);
  }

  const { scale, color } = useSpring({
    scale: active ? [2, 2, 2] : [1, 1, 1],
    color: hovered ? "red" : props.color,
  });

  return (
    <a.mesh
      ref={ref}
      {...props}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={scale}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial attach="material" color={color} />
    </a.mesh>
  );
}

export default Cube;
