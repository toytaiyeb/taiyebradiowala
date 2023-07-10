import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.querySelector("#playarea").appendChild(renderer.domElement)
renderer.shadowMap.enabled=true
const controls = new OrbitControls(camera, renderer.domElement)
controls.mouseButtons = {
	LEFT: THREE.MOUSE.PAN
}

controls.enableZoom = false
controls.enablePan=true
class Box extends THREE.Mesh{
  constructor({w, h, dep,
    color='#0000ff',
    velocity={
    x:0,y:0,z:0
  },
  position={
    x:0,y:0,z:0
  }
}
)
{
    super(new THREE.BoxGeometry(w, h, dep),
      new THREE.MeshStandardMaterial({ color }))
    this.height=h
    this.width=w
    this.depth=dep
    
    this.position.set(position.x,position.y,position.z)
    this.bottom=this.position.y-this.height/2
    this.top=this.position.y+this.height/2
    this.velocity=velocity

    }
    
    update(group){
      this.bottom=this.position.y-this.height/2
      this.top=this.position.y+this.height/2
    
      this.velocity.y+= -0.01

      if(this.bottom+this.velocity.y<=ground.top ){
        this.velocity.y=-this.velocity.y
        
      }
      else{
        this.position.y=+this.velocity.y
      }
    }
}

const cube = new Box({
  w:1,
  h:1,
  dep:1,
  velocity:{
    x:0,
    y:-0.1,
    z:0

  }
})
cube.castShadow=true
scene.add(cube)
console.log(cube.position.y-cube.height/2)


const ground = new Box({
  w:5,
  h:.5,
  dep:1,
  color:'#ffffff',
  position:{
    x:0,
    y:-2,
    z:0,
  }
})


ground.receiveShadow=true
scene.add(ground)


const light= new THREE.DirectionalLight(0xffffff,1)

light.position.z=3
light.castShadow=true
scene.add(light)
camera.position.z = 5






function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  // cube.position.y-=0.01
  cube.update()
  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
}
animate()