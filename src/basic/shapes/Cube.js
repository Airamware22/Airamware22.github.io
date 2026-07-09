const loader = new THREE.TextureLoader();
const texture = loader.load( 'https://yt3.googleusercontent.com/TZizxSI-aKiuPzqxPKiEQAtGPlHmI9hGvcCrYflL8g8nuDbGvtFmDxWlIoMmBpk9odTShjBB=s160-c-k-c0x00ffffff-no-rj' );
texture.colorSpace = THREE.SRGBColorSpace;



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshStandardMaterial({ map: texture,});
const cube = new THREE.Mesh( geometry, material );
cube.name = 'cube';

export default cube;