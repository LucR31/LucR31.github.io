import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const container = document.getElementById( 'card' );
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffcc );
scene.fog = new THREE.Fog( 0x99DDFF, 5000, 10000 );
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth/4, window.innerHeight/4 );
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

container.appendChild( renderer.domElement );

const pmremGenerator = new THREE.PMREMGenerator( renderer );
//scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;

camera.position.z = 23;


const light = new THREE.DirectionalLight( 0xffffcc, 10 );

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
        

const loader = new GLTFLoader();
loader.load( 'adaptor_v4.glb', function ( gltf ) {
  const model = gltf.scene; 
  const plasticMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x334d00,         // base color, you can change it
  metalness: 0.0,          // plastic is non-metallic
  roughness: 0.4,          // somewhat smooth but not mirror-like
  clearcoat: 0.3,          // subtle glossy layer on top
  clearcoatRoughness: 0.1, // how sharp the clearcoat reflection is
  reflectivity: 0.5,       // controls intensity of reflections
});
 model.traverse((child) => {
  if (child.isMesh) {
    child.material = plasticMaterial;
  }
});

  scene.add( model );

}, undefined, function ( error ) {

  console.error( error );

} );

const card3d = document.getElementById('3d-graph')
const g_Data = {'nodes': [{'id': 4830}, {'id': 4831}, {'id': 4832}, {'id': 3751}, {'id': 3752}, {'id': 3787}, {'id': 3835}, {'id': 3786}, {'id': 3788}, {'id': 3834}, {'id': 3836}, {'id': 4228}, {'id': 4229}, {'id': 4273}, {'id': 4282}, {'id': 4288}, {'id': 4312}, {'id': 4348}, {'id': 4351}, {'id': 4375}, {'id': 4399}, {'id': 4417}, {'id': 4447}, {'id': 4453}, {'id': 4507}, {'id': 4510}, {'id': 4272}, {'id': 4274}, {'id': 4281}, {'id': 4283}, {'id': 4287}, {'id': 4289}, {'id': 4311}, {'id': 4313}, {'id': 4347}, {'id': 4349}, {'id': 4350}, {'id': 4352}, {'id': 4374}, {'id': 4376}, {'id': 4398}, {'id': 4400}, {'id': 4416}, {'id': 4418}, {'id': 4446}, {'id': 4448}, {'id': 4452}, {'id': 4454}, {'id': 4506}, {'id': 4508}, {'id': 4509}, {'id': 4511}, {'id': 4538}, {'id': 4539}, {'id': 4550}, {'id': 4568}, {'id': 4598}, {'id': 4613}, {'id': 4622}, {'id': 4646}, {'id': 4652}, {'id': 4673}, {'id': 4682}, {'id': 4688}, {'id': 4697}, {'id': 4709}, {'id': 4736}, {'id': 4549}, {'id': 4551}, {'id': 4567}, {'id': 4569}, {'id': 4597}, {'id': 4599}, {'id': 4612}, {'id': 4614}, {'id': 4621}, {'id': 4623}, {'id': 4645}, {'id': 4647}, {'id': 4651}, {'id': 4653}, {'id': 4672}, {'id': 4674}, {'id': 4681}, {'id': 4683}, {'id': 4687}, {'id': 4689}, {'id': 4696}, {'id': 4698}, {'id': 4708}, {'id': 4710}, {'id': 4735}, {'id': 4737}, {'id': 4786}, {'id': 4825}, {'id': 4826}, {'id': 4827}, {'id': 4828}, {'id': 4829}], 'links': [{'source': 4830, 'target': 4831}, {'source': 4830, 'target': 4832}, {'source': 3751, 'target': 3752}, {'source': 3751, 'target': 3787}, {'source': 3751, 'target': 3835}, {'source': 3752, 'target': 3787}, {'source': 3752, 'target': 3835}, {'source': 3786, 'target': 3787}, {'source': 3787, 'target': 3788}, {'source': 3788, 'target': 4830}, {'source': 3834, 'target': 3835}, {'source': 3835, 'target': 3836}, {'source': 3836, 'target': 4830}, {'source': 4228, 'target': 4229}, {'source': 4228, 'target': 4273}, {'source': 4228, 'target': 4282}, {'source': 4228, 'target': 4288}, {'source': 4228, 'target': 4312}, {'source': 4228, 'target': 4348}, {'source': 4228, 'target': 4351}, {'source': 4228, 'target': 4375}, {'source': 4228, 'target': 4399}, {'source': 4228, 'target': 4417}, {'source': 4228, 'target': 4447}, {'source': 4228, 'target': 4453}, {'source': 4228, 'target': 4507}, {'source': 4228, 'target': 4510}, {'source': 4229, 'target': 4273}, {'source': 4229, 'target': 4282}, {'source': 4229, 'target': 4288}, {'source': 4229, 'target': 4312}, {'source': 4229, 'target': 4348}, {'source': 4229, 'target': 4351}, {'source': 4229, 'target': 4375}, {'source': 4229, 'target': 4399}, {'source': 4229, 'target': 4417}, {'source': 4229, 'target': 4447}, {'source': 4229, 'target': 4453}, {'source': 4229, 'target': 4507}, {'source': 4229, 'target': 4510}, {'source': 4272, 'target': 4273}, {'source': 4273, 'target': 4274}, {'source': 4274, 'target': 4830}, {'source': 4281, 'target': 4282}, {'source': 4282, 'target': 4283}, {'source': 4283, 'target': 4830}, {'source': 4287, 'target': 4288}, {'source': 4288, 'target': 4289}, {'source': 4289, 'target': 4830}, {'source': 4311, 'target': 4312}, {'source': 4312, 'target': 4313}, {'source': 4313, 'target': 4830}, {'source': 4347, 'target': 4348}, {'source': 4348, 'target': 4349}, {'source': 4349, 'target': 4830}, {'source': 4350, 'target': 4351}, {'source': 4351, 'target': 4352}, {'source': 4352, 'target': 4830}, {'source': 4374, 'target': 4375}, {'source': 4375, 'target': 4376}, {'source': 4376, 'target': 4830}, {'source': 4398, 'target': 4399}, {'source': 4399, 'target': 4400}, {'source': 4400, 'target': 4830}, {'source': 4416, 'target': 4417}, {'source': 4417, 'target': 4418}, {'source': 4418, 'target': 4830}, {'source': 4446, 'target': 4447}, {'source': 4447, 'target': 4448}, {'source': 4448, 'target': 4830}, {'source': 4452, 'target': 4453}, {'source': 4453, 'target': 4454}, {'source': 4454, 'target': 4830}, {'source': 4506, 'target': 4507}, {'source': 4507, 'target': 4508}, {'source': 4508, 'target': 4830}, {'source': 4509, 'target': 4510}, {'source': 4510, 'target': 4511}, {'source': 4511, 'target': 4830}, {'source': 4538, 'target': 4539}, {'source': 4538, 'target': 4550}, {'source': 4538, 'target': 4568}, {'source': 4538, 'target': 4598}, {'source': 4538, 'target': 4613}, {'source': 4538, 'target': 4622}, {'source': 4538, 'target': 4646}, {'source': 4538, 'target': 4652}, {'source': 4538, 'target': 4673}, {'source': 4538, 'target': 4682}, {'source': 4538, 'target': 4688}, {'source': 4538, 'target': 4697}, {'source': 4538, 'target': 4709}, {'source': 4538, 'target': 4736}, {'source': 4539, 'target': 4550}, {'source': 4539, 'target': 4568}, {'source': 4539, 'target': 4598}, {'source': 4539, 'target': 4613}, {'source': 4539, 'target': 4622}, {'source': 4539, 'target': 4646}, {'source': 4539, 'target': 4652}, {'source': 4539, 'target': 4673}, {'source': 4539, 'target': 4682}, {'source': 4539, 'target': 4688}, {'source': 4539, 'target': 4697}, {'source': 4539, 'target': 4709}, {'source': 4539, 'target': 4736}, {'source': 4549, 'target': 4550}, {'source': 4550, 'target': 4551}, {'source': 4551, 'target': 4830}, {'source': 4567, 'target': 4568}, {'source': 4568, 'target': 4569}, {'source': 4569, 'target': 4830}, {'source': 4597, 'target': 4598}, {'source': 4598, 'target': 4599}, {'source': 4599, 'target': 4830}, {'source': 4612, 'target': 4613}, {'source': 4613, 'target': 4614}, {'source': 4614, 'target': 4830}, {'source': 4621, 'target': 4622}, {'source': 4622, 'target': 4623}, {'source': 4623, 'target': 4830}, {'source': 4645, 'target': 4646}, {'source': 4646, 'target': 4647}, {'source': 4647, 'target': 4830}, {'source': 4651, 'target': 4652}, {'source': 4652, 'target': 4653}, {'source': 4653, 'target': 4830}, {'source': 4672, 'target': 4673}, {'source': 4673, 'target': 4674}, {'source': 4674, 'target': 4830}, {'source': 4681, 'target': 4682}, {'source': 4682, 'target': 4683}, {'source': 4683, 'target': 4830}, {'source': 4687, 'target': 4688}, {'source': 4688, 'target': 4689}, {'source': 4689, 'target': 4830}, {'source': 4696, 'target': 4697}, {'source': 4697, 'target': 4698}, {'source': 4698, 'target': 4830}, {'source': 4708, 'target': 4709}, {'source': 4709, 'target': 4710}, {'source': 4710, 'target': 4830}, {'source': 4735, 'target': 4736}, {'source': 4736, 'target': 4737}, {'source': 4737, 'target': 4830}, {'source': 4786, 'target': 4830}, {'source': 4825, 'target': 4830}, {'source': 4826, 'target': 4830}, {'source': 4827, 'target': 4830}, {'source': 4828, 'target': 4830}, {'source': 4829, 'target': 4830}]}
const Graph = new ForceGraph3D(card3d)
        .nodeColor(0x7fca97)
		    .nodeOpacity(1)
        .linkWidth(1)
        .linkOpacity(1)
        .linkColor(0x760070)
        .graphData(g_Data);



function animate() {
  scene.rotation.x += 0.0015;
  scene.rotation.y += 0.0015;
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );