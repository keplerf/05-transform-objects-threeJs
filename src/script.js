import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;

const mesh2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const mesh3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
mesh3.position.x = 1.3;

group.add(mesh);
group.add(mesh2);
group.add(mesh3);

group.rotation.x = Math.PI * 0.25;

// scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
mesh.position.set(0.7, -0.6, 1);
// mesh.scale.x = 2;
// mesh.scale.y = 0.33;
// mesh.scale.z = 0.33;
mesh.rotation.reorder("YXZ");
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.x = Math.PI * 0.25;

//helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
camera.lookAt(mesh.position);

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
