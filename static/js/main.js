// Constante que guarda la etiqueta button de inscribirse
const botonInscribirse = document.getElementById("btn-inscribir");

// Función sin parámetros para cambiar el texto a "Bienvenido" y el estilo del botón a color café y que el cursor no cambie
function inscribirse() {
    botonInscribirse.innerText = "Bienvenido";
    botonInscribirse.style = "background-color: #bba391; cursor: default;";
}

// Constante que guarda la etiqueta span de la cantidad en el carrito
const etiquetaCantidadCarrito = document.getElementById("carrito");
// Variable que guardará la cantidad del carrito de forma numérica
let carritoCantidad = parseInt(etiquetaCantidadCarrito.innerText);

// Función sin parámetros para aumentar la cantidad en el carrito
function sumarCarrito() {
    carritoCantidad += 1;
    etiquetaCantidadCarrito.innerText = carritoCantidad;
}

// Alertas
// Función sin parámetros para envíar una alerta de que la geolocalización está activada
function geolocalActivar() {
    alert("Se ha activado la geolocalización!")
}

//Función sin parámetros para envíar una alerta de que se está descargando la app
function descApp() {
    alert("Se está descargando la aplicación...")
}