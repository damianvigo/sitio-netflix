const fila = document.getElementById('contenedor-carousel');
const peliculas = document.querySelector('peliculas-recomendadas__contenedor-principal__contenedor-carousel__carousel__pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/* Event Listener para la flecha derecha */
flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;
});

/* Event Listener para la flecha izquierda */
flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;
});
