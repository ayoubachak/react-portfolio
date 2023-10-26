import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree, useFrame} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const TheLeetAIModel = () => {
    const { scene, camera } = useThree();
    const modelRef = useRef();

    useEffect(() => {
        camera.position.z = 10;
      const loader = new GLTFLoader();
      loader.load(
        'src/assets/3d/the-leet-ai-avatar.glb',
        (gltf) => {
            gltf.scene.scale.set(30, 30, 30);
            gltf.scene.position.y = -20; // Adjust the y-position
            modelRef.current = gltf.scene;
          scene.add(gltf.scene);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
          console.error('An error occurred while loading the GLTF model:', error);
        }
      );
    }, [scene]);
    
    useFrame(() => {
        if (modelRef.current) {
          // This will re-position the camera to focus on the model
          camera.lookAt(modelRef.current.position);
        }
      });

    return null;
  };

export default TheLeetAIModel;