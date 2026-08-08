const loader = new THREE.TextureLoader();
const texture = loader.load( 'https://cdn.discordapp.com/avatars/1420768804312580159/0f7ef21f2554c93c6820f83cbfcc36e5.webp' );
texture.colorSpace = THREE.SRGBColorSpace;



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshStandardMaterial({ map: texture,});
const cube = new THREE.Mesh( geometry, material );
cube.name = 'cube';

export default cube;