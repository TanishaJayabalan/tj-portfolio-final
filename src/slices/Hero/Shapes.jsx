'use client'

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ContactShadows,Float,Environment } from "@react-three/drei"
import { Suspense,useEffect,useRef,useState } from "react"
import { gsap } from "gsap"


export default function Shapes()
{
    return(
        <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
            <Canvas className="z-0 shadows gl={{antialias:false}} dpr={[1,1.5]} camera={{position:[0,0,25], fov:30, near:1 far:40">
<Suspense fallback={null}>
    <Geometries></Geometries>
    <ContactShadows
    position={[0,-3.5,0]}
    opacity={0.65}
    scale={40}
    blur={1}
    far={9}
></ContactShadows>
<Environment preset="studio" ></Environment>
</Suspense>
</Canvas>
        </div>
    )
}

function Geometries()
{
    
    const geometries=
    [
       
        {
            position:[0.65, -1.3, -0.15],
            r:0.41,
            geometry: new THREE.CapsuleGeometry(0.2,1,2,16),
        },
        {
            position:[-2.5 , 3.35, -4],
            r:0.6,
            geometry: new THREE.DodecahedronGeometry(1.5),
        },
        {
            position:[0,0.1,0],
            r:0.3,
            geometry: new THREE.TorusKnotGeometry( 1.3, 0.35, 16, 32 ),
        },
       
        {
            position:[-1.5, -1.5, -1],
            r:0.5,
            geometry:  new THREE.TorusGeometry( 0.6, 0.25, 16, 32 ),
        },
        {
            position:[0.75, 0.85, 0.75],
            r:0.5,
            geometry:  new THREE.BoxGeometry( 0.6, 0.6, 0.6, 25),
        },


    ];

    const materials = [new THREE.MeshNormalMaterial(),
        new THREE.MeshStandardMaterial({color: 0xeb2f06, roughness:0}),
        new THREE.MeshStandardMaterial({color: 0x0b1464, roughness:0.5}),
        new THREE.MeshStandardMaterial({color: 0xffc312, roughness:0.8}),
        new THREE.MeshStandardMaterial({color: 0xa3cb38, roughness:0.2, metalness:0.5}),
        new THREE.MeshStandardMaterial({color: 0xff7979, roughness:0.6, metalness:1}),
        new THREE.MeshStandardMaterial({color: 0x009432, roughness:0.5, metalness:0.3}),
        new THREE.MeshStandardMaterial({color: 0x12CBC4, roughness:0.8}),
        new THREE.MeshStandardMaterial({color: 0xFC427B, roughness:0.2}),
        new THREE.MeshStandardMaterial({color: 0xD6A2E8, roughness:0.6}),
        new THREE.MeshStandardMaterial({color: 0xFEA47F, roughness:0.6}),
    ];

    const soundeffects=
    [
        new Audio("/sounds/knock1.mp3"),
        new Audio("/sounds/knock2.mp3"),
        new Audio("/sounds/knock3.mp3"),
        new Audio("/sounds/knock4.mp3"),
    ]

    return geometries.map(({position,r,geometry})=>(
        <Geometry
        key={JSON.stringify(position)}
        position={position.map((p)=>p*2)}
        geometry={geometry}
        soundeffects={soundeffects}
        materials={materials}
        r={r}></Geometry>
    ))
}

function Geometry({r,position,geometry,materials, soundeffects})
{
    const meshRef = useRef()
    const[visible,setVisible] = useState(false)

    const startingMaterial = getRandomMaterial()
    
    function getRandomMaterial(){
        return gsap.utils.random(materials)
    }

    function handleClick(e)
    {
        const mesh=e.object

        gsap.utils.random(soundeffects).play();

        gsap.to(mesh.rotation,{
            x:`+=${gsap.utils.random(0,2)}`,
            y:`+=${gsap.utils.random(0,2)}`,
            z:`+=${gsap.utils.random(0,2)}`,
            duration:1.3,
            ease:"elastic.out(1,0.3)",
            yoyo:true
        })
        mesh.material=getRandomMaterial();


    }
    const handlePointerOver = ()=>
    {
        document.body.style.cursor = "pointer"

    }
    const handlePointerOut = ()=>
    {
        document.body.style.cursor = "default"
    }
    
    useEffect(()=>{
     let ctx= gsap.context(()=>{
            setVisible(true)
            gsap.from(meshRef.current.scale,
                {
                    x:0,
                    y:0,
                    z:0,
                    duration:1,
                    ease:"elastic.out(1,0.3)",
                    delay: 0.3,
                });
        });
        return ()=>ctx.revert()

    },[]);


    return (
        <group position={position} ref={meshRef}>
        <Float speed={5*r} rotationIntensity={6*r} floatIntensity={5*r}>
            <mesh
            geometry={geometry}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            visible={visible}
            material={startingMaterial}></mesh>
        </Float>
        </group>
        );
}