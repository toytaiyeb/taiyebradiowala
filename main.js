//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


function isMobile(){
    return /Android|iPhone/i.test(navigator.userAgent)
}
function threeJs()
{
  if(isMobile()){
    //Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x +=11;
camera.position.y +=20;



//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'rcomputerm';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    //If the file is loaded, add it to the scene
    gltf.scene.scale.set(4.5,4.5,4.5)
    object.position.y+=9
    object.position.x+=4
    scene.add(gltf.scene);
    object.rotation.y+= 11;
    // object.rotation.z+= 11;


    
    
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth/1, window.innerHeight/1);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "rcomputerm" ? 10 : 300;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "rcomputerm" ? 5 : 1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "rcomputerm") {
  controls = new OrbitControls(camera, renderer.domElement);
// to disable zoom
 controls.enableZoom = false;
// to disable pan
 controls.enablePan = false;
 controls.touches.ONE=false
 // you can easily disable it by using
controls.enabled = false;
 

}

//Render the scene
function animate() {
  requestAnimationFrame(animate);
  //Here we could add some code to update the scene, adding some automatic movement

  //Make the computer move
  if (object && objToRender === "rcomputerm") {
    //I've played with the constants here until it looked good 
    object.rotation.x += 0.03;
    object.rotation.y += 0.03;
    object.rotation.z += 0.03 ;
    object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
  }
  renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(window.innerWidth/1, window.innerHeight/1);
});

//add mouse position listener, so we can make the eye move
// document.onmousemove = (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// }

//Start the 3D rendering
animate();
//IMP LIL
//rotate on no interacting

  }
  else{
    //Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x +=11;


//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later

var object;
//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'rcomputerm';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    //If the file is loaded, add it to the scene
    gltf.scene.scale.set(4.5,4.5,4.5)
    scene.add(gltf.scene);
    object.rotation.y+= 11;
    // object.rotation.z+= 11;

    
    
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth/2, window.innerHeight/2);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "rcomputerm" ? 10 : 300;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "rcomputerm" ? 5 : 1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "rcomputerm") {
  controls = new OrbitControls(camera, renderer.domElement);
// to disable zoom
 controls.enableZoom = false;
// to disable pan
 controls.enablePan = false;

}

//Render the scene
function animate() {
  requestAnimationFrame(animate);
  
  
  //Here we could add some code to update the scene, adding some automatic movement


  
  //Make the computer move
  if (object && objToRender === "rcomputerm") {
    object.rotation.x += 0.02;
    object.rotation.y += 0.02;
    object.rotation.z += 0.02;
    //I've played with the constants here until it looked good 
    object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
  }
  renderer.render(scene, camera);
  
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(window.innerWidth/2, window.innerHeight/2);
});

//add mouse position listener, so we can make the eye move
// document.onmousemove = (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// }

//Start the 3D rendering
animate();
//IMP LIL
//rotate on no interacting

  }
}

threeJs()