/*const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

export default camera; */

const contenedor = document.getElementById('mi-espacio-3d');
const ancho = contenedor.clientWidth;
const alto = contenedor.clientHeight;

// Ajusta los parámetros de tu PerspectiveCamera con el ancho y alto del contenedor
const camera = new THREE.PerspectiveCamera(75, ancho / alto, 0.1, 1000);

export default camera;