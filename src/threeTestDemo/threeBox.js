import * as THREE from 'three';
// import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'

// const scene = new THREE.Scene();
// const createCamera = function () {
//   const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, Infinity);
//   scene.add(camera)
//   return camera
// }

// const createLingt = function () {
//   const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
//   const directionalLight = new THREE.DirectionalLight(0x404040, 0.8); // soft white light
//   directionalLight.position.set(1, 300, 1)
//   scene.add(ambientLight, directionalLight);
// }

// const initCanvas = function () {
//   const width = window.innerWidth, height = window.innerHeight;
//   const canvasBox = document.getElementById('app')
//   const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setSize(width, height) //设置渲染区域尺寸
//   renderer.setClearColor(0xf8f9fc, 1) //设置背景颜色
//   canvasBox.appendChild(renderer.domElement);
//   const camera = createCamera()
//   camera.position.set(200, 300, 200); //设置相机位置
//   camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
//   createLingt()

//   function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//   }
//   animate()
// }


// const createBox = function () {
//   const geometry = new THREE.BoxGeometry(100, 100, 100);
//   geometry.center()
//   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//   const cube = new THREE.Mesh(geometry, material);
//   cube.name="cube"
//   scene.add(cube);
// }

// initCanvas()
// createBox()

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(- 10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);