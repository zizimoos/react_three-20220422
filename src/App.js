import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Cube from "./componets/Cube";
import PCube from "./componets/PCube";
import Spin from "./componets/Spin";
import { Physics } from "@react-three/cannon";
import Plane from "./componets/Plane";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 15]} />
        <Spin>
          <Cube position={[0, 0, 0]} color="yellowgreen"></Cube>
        </Spin>
        <Cube position={[1.5, 0, 0]} color="teal"></Cube>
        <Cube position={[-1.5, 0, 0]} color="dodgerblue"></Cube>{" "}
        <Physics>
          <PCube
            position={[-0.5, 6, 0]}
            rotation={[0, -2, 1]}
            color="red"
          ></PCube>
          <PCube
            position={[0.5, 4, 0]}
            rotation={[0, 2, -4]}
            color="red"
          ></PCube>
          <Plane position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}></Plane>
        </Physics>
        <OrbitControls />
      </Canvas>
    </Container>
  );
}

export default App;
