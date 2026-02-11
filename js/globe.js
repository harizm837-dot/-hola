const canvas=document.getElementById("globe");
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=3;
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

scene.add(new THREE.AmbientLight(0xffffff,0.6));
const dirLight=new THREE.DirectionalLight(0xffffff,0.9);
dirLight.position.set(5,5,5);
scene.add(dirLight);

const globe=new THREE.Mesh(
  new THREE.SphereGeometry(1,64,64),
  new THREE.MeshStandardMaterial({color:0xffffff,wireframe:true})
);
scene.add(globe);

function animate(){requestAnimationFrame(animate);globe.rotation.y+=0.0012;renderer.render(scene,camera);}
animate();

window.addEventListener("resize",()=>{
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});
