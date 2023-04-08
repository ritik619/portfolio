import { Environment, Gltf, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

const Avatar = () => {
  const group = useRef(null);

  const { animations } = useGLTF("anim.glb",true);
  const { actions, names ,mixer} = useAnimations(animations, group);
  
  useEffect(() => {
    if (actions && names) {
      const actionsKeys = Object.keys(actions);
      console.log(actionsKeys)
      actions[actionsKeys[1]]?.play();

    }
  }, [actions, names]);
  return (
        <group ref={group} dispose={null}>
            <OrbitControls  />
            <Environment files="enviornment.hdr" />
            <Gltf src="model.glb" receiveShadow castShadow scale={2} position={[0,-2,0]} rotateY={30} animations={animations[0]}/>
        </group>
  )
}



const AvatarWrapper = () => {
  return (
    <Canvas>
      <Avatar/>
    </Canvas>
  )
}

export default AvatarWrapper
