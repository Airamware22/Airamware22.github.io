import scene from './basic/Scene.js';
import camera from './basic/Camera.js';
import renderer from './basic/Renderer.js';
import cube from './basic/shapes/Cube.js';
import light from './basic/Light.js';



scene.add( cube );
scene.add(light);

camera.position.z = 2;
camera.position.y = 0;

const controls = new THREE.OrbitControls(camera, renderer.domElement);

//renderer.render(scene, camera);


console.log(scene, camera, renderer, cube);

setInterval(() => {
    cube.rotation.y += .005;
    cube.rotation.z += .005;
    controls.update();
    renderer.render(scene, camera);
}, 1000/60);