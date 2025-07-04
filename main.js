import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const container = document.getElementById( 'card' );
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
scene.fog = new THREE.Fog( 0x99DDFF, 5000, 10000 );
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
container.appendChild( renderer.domElement );

const pmremGenerator = new THREE.PMREMGenerator( renderer );
//scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;

camera.position.z = 40;


const light = new THREE.DirectionalLight( 0xffffcc, 1 );

				light.position.set( 200, 1000, 50 );

				light.castShadow = true;

				light.shadow.camera.left = - 50000;
				light.shadow.camera.right = 50000;
				light.shadow.camera.top = 50000;
				light.shadow.camera.bottom = - 50000;
				light.shadow.camera.far = 20000;

				light.shadow.bias = - 0.001;

				light.shadow.camera.updateProjectionMatrix();

				scene.add( light );
        const hemi = new THREE.HemisphereLight( 0xffffcc, 0x669933, 1 / 3 );

				scene.add( hemi );

const loader = new GLTFLoader();
loader.load( 'corona.glb', function ( gltf ) {
  const model = gltf.scene; 
  scene.add( model );

}, undefined, function ( error ) {

  console.error( error );

} );

function animate() {
  scene.rotation.x += 0.0015;
  scene.rotation.y += 0.0015;
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );