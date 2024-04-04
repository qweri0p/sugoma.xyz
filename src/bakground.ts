import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#c')! //STFU TYPESCRIPT TAKE THIS EXCLEMATIONMARK AND GET OUT OF MY SIGHT!
})

camera.position.set(0, 10, 50)

const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.target = new THREE.Vector3(.5, .5, .5);
controls.enableZoom = false;
controls.enableRotate = false;
controls.enablePan = false;

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', onWindowResize)
onWindowResize()

function addstar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)
  const x = THREE.MathUtils.randFloatSpread(300)
  const y = THREE.MathUtils.randFloatSpread(300)
  const z = THREE.MathUtils.randFloatSpread(300)
  star.position.set(x, y, z)
  scene.add(star)
}

for (let i = 0; i < 2000; i++) addstar()

const amogusTexture = new THREE.TextureLoader().load('/sus.png')

const geometry = new THREE.BoxGeometry(25, 25, 25)
const material = new THREE.MeshBasicMaterial({ map: amogusTexture, color: 0xffffff })
const amogus = new THREE.Mesh(geometry, material)
scene.add(amogus)

const ambientlight = new THREE.AmbientLight(0xffffff)
scene.add(ambientlight)
// const gridhelper = new THREE.GridHelper(200, 200)
// scene.add(gridhelper)

function animate() {
  controls.update()
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  amogus.rotation.y += 0.01
}
animate()
