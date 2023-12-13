import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { OrbitControls } from 'https://qweri0p.github.io/sugoma.xyz/js/OrbitControls.js';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#c')
});

camera.position.z = 50;
camera.position.y = 10;
const amogusTexture = new THREE.TextureLoader().load('sus.png');

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.target = new THREE.Vector3(.5, .5, .5);
controls.enableZoom = false;
controls.enableRotate = false;
controls.enablePan = false;

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'resize', onWindowResize );
onWindowResize();


function addstar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff
    });
    const star = new THREE.Mesh(geometry, material);
    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
    star.position.set(x,y,z);
    scene.add(star);
}

const geometry = new THREE.BoxGeometry(25, 25, 25);
const material = new THREE.MeshBasicMaterial({
    map: amogusTexture,
    color: 0xffffff
});
const amogus = new THREE.Mesh(geometry, material);

Array(2000).fill().forEach(addstar);

const gridhelper = new THREE.GridHelper(200, 200);
//scene.add(gridhelper)
const ambientlight = new THREE.AmbientLight(0xffffff);
scene.add(ambientlight, amogus);

function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    //amogus.rotation.x += 0.01;
    amogus.rotation.y += 0.01;
    //amogus.rotation.z += 0.01;
}
animate()