document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');

    const botonesFiltro = document.querySelectorAll('.filtros button');
    const botonesGenero = document.querySelectorAll('.filtros-genero button');
    const tarjetas = Array.from(document.querySelectorAll('.tarjeta'));

    let filtroActual = 'todos';
    let generoActual = 'todos';
    let tarjetasFiltradas = [];

    function filtrarTarjetas() {
        tarjetasFiltradas = tarjetas.filter(tarjeta => {
            const categoriaCorrecta = filtroActual === 'todos' || tarjeta.dataset.categoria === filtroActual;
            const generoCorrecto = generoActual === 'todos' || tarjeta.dataset.genero === generoActual;
            return categoriaCorrecta && generoCorrecto;
        });
    }

    function actualizarTarjetas() {
        tarjetas.forEach(tarjeta => tarjeta.style.display = 'none');

        tarjetasFiltradas.forEach(tarjeta => {
            tarjeta.style.display = 'flex';
        });
    }

    function marcarBotonActivo(botones, botonSeleccionado) {
        botones.forEach(boton => boton.classList.remove('activo'));
        botonSeleccionado.classList.add('activo');
    }

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            filtroActual = boton.dataset.filtro;
            marcarBotonActivo(botonesFiltro, boton);
            filtrarTarjetas();
            actualizarTarjetas();
        });
    });

    botonesGenero.forEach(boton => {
        boton.addEventListener('click', () => {
            generoActual = boton.dataset.genero;
            marcarBotonActivo(botonesGenero, boton);
            filtrarTarjetas();
            actualizarTarjetas();
        });
    });

    filtrarTarjetas();
    actualizarTarjetas();
});


//tema claro/oscuro

const boton = document.getElementById('theme-toggle');
const icono = document.getElementById('theme-icon');

if (!document.body.classList.contains('oscuro')) {
  document.body.classList.add('claro');
}

boton.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
  document.body.classList.toggle('claro');

  if (document.body.classList.contains('oscuro')) {
    icono.classList.remove('fa-moon'); 
    icono.classList.add('fa-sun');    
    
  } else {
    icono.classList.remove('fa-sun'); 
    icono.classList.add('fa-moon'); 
  }
});
