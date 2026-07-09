/*const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

export default renderer; */
// 1. Seleccionar el contenedor específico de tu HTML
const contenedor = document.getElementById('mi-espacio-3d');

// 2. Obtener el ancho y alto del contenedor (no de la ventana completa)
const ancho = contenedor.clientWidth;
const alto = contenedor.clientHeight;

// 3. Crear el renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(ancho, alto);

// 4. Inyectar el canvas DENTRO del contenedor específico
contenedor.appendChild(renderer.domElement);

export default renderer;
