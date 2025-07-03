export default function World() {

  return (
    <>
      {/* Cube */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </>
  )
}

