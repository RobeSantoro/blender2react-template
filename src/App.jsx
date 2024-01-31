import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import World from './components/World'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
      <Canvas
        eventPrefix="offset"
        frameloop="always"
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        camera={{ fov: 100, position: [3, 2, -5], near: 1, far: 1000 }}>

        <OrbitControls />
        <ambientLight intensity={0.8} />
        
        <Suspense fallback={null}>
          <World />
        </Suspense>
        
        <Perf position="bottom-right" />
        <gridHelper args={[20, 20, "black", "grey"]} />
      </Canvas>
    </>
  )
}

export default App
