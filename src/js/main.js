const fila = document.getElementById('contenedor-carousel');
const peliculas = document.querySelectorAll('.peliculas-recomendadas__contenedor-principal__contenedor-carousel__carousel__pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/* Event Listener para la flecha derecha */
flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector('.peliculas-recomendadas__contenedor-titulo-controles__indicadores .active');
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('active');
    indicadorActivo.classList.remove('active');
  }
});

/* Event Listener para la flecha izquierda */
flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector('.peliculas-recomendadas__contenedor-titulo-controles__indicadores .active');
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('active');
    indicadorActivo.classList.remove('active');
  }
});

/* Paginación */
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement('button');

  if (i === 0) {
    indicador.classList.add('active');
  }

  document.getElementById('indicadores').appendChild(indicador);
  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.peliculas-recomendadas__contenedor-titulo-controles__indicadores .active').classList.remove('active');
    e.target.classList.add('active');
  });
}

/* Hover */
peliculas.forEach((pelicula) => {
  pelicula.addEventListener('mouseenter', (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach((pelicula) => pelicula.classList.remove('hover'));
      elemento.classList.add('hover');
    }, 300);
  });
});

fila.addEventListener('mouseleave', () => {
  peliculas.forEach((pelicula) => pelicula.classList.remove('hover'));
});
