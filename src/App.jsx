import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import World from './components/World'

function App() {

  return (
    <>
      <Canvas
        eventPrefix="offset" 
        frameloop="always"
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        camera={{ fov: 100, position: [0, 0, -5], near: 1, far: 1000 }}>
        <Suspense fallback={null}>
          <World />
        </Suspense>
        <Perf position="bottom-right" />
      </Canvas>
    </>
  )
}

export default App
