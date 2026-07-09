const color = 0x404040;
const intensity = 1;
const light = new THREE.AmbientLight(color);


const directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 0.5);

directionalLight.position.set(-10, 10, 10);

light.add(directionalLight);

console.log(directionalLight)

export default light;