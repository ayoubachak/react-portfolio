import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useDrag } from 'react-use-gesture';
import { useThree } from '@react-three/fiber';


const Blob = ({ position, scale, geometryArgs }) => {
  const mesh = useRef();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover ? 1 : 0.15,
        0.02
      );
    }
  });

  const { camera, gl } = useThree();

  const bind = useDrag(({ movement: [x, y] }) => {
    const vec = new THREE.Vector3(
      (x / gl.domElement.clientWidth) * 2 - 1,
      -(y / gl.domElement.clientHeight) * 2 + 1,
      0
    );
    vec.unproject(camera);
    const dir = vec.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    mesh.current.position.set(pos.x, pos.y, pos.z);
  }, { pointerEvents: true });

  useFrame(() => {
    if (hover) {
      // Add a wavy effect when hovered
      mesh.current.rotation.x += 0.05;
      mesh.current.rotation.y += 0.05;
    }else{
        mesh.current.rotation.x += 0.02;
        mesh.current.rotation.y += 0.02;

    }
  });

  const handleMouseOver = () => {
    setHover(true);
    document.body.style.cursor = 'pointer';  // Change cursor to pointer
  };

  const handleMouseOut = () => {
    setHover(false);
    document.body.style.cursor = 'default';  // Change cursor back to default
  };

  return (
    <mesh
      ref={mesh}
      scale={active ? [scale + 0.2, scale + 0.2, scale + 0.2] : [scale, scale, scale]}
      position={position}
      onPointerOver={handleMouseOver}
      onPointerOut={handleMouseOut}
      onPointerDown={() => setActive(!active)}
      {...bind()}
    >
      <icosahedronBufferGeometry args={geometryArgs} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};
const BlobCanvas = () => {
    const blobs = useMemo(() => {
      const temp = [];
      for (let i = 0; i < 1; i++) {
        const x = MathUtils.randFloat(-30, 30);  // Generate only positive x
        const y = MathUtils.randFloat(-20,0);
        const z = MathUtils.randFloat(0,30);
        const scale = MathUtils.randFloat(1, 2);
        const geometryArgs = [MathUtils.randFloat(1, 3), 20];
        temp.push(
          <Blob
            position={[-x, y, z]}  // Use negative x for right half
            scale={scale}
            geometryArgs={geometryArgs}
            key={i}
          />
        );
      }
      return temp;
    }, []);
  return (
    <div style={{ position: "absolute", zIndex: 0, width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, -10] }}>
        {blobs}
      </Canvas>
    </div>
  );
};

export default BlobCanvas;