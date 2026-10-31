const scene = new THREE.Scene();



const loader = new THREE.TextureLoader();
const texture = loader.load(
    'qwantani_puresky_test1.jpg',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });


export default scene;