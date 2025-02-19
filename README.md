# PracticaSASS

Proyecto Tienda de Ropa
Este proyecto es una tienda de ropa en línea desarrollada con HTML, CSS (usando Sass) y otras tecnologías web. A continuación, te explico cómo está organizada la estructura de archivos y cómo he utilizado Sass para el desarrollo.

Estructura de Archivos
La estructura de carpetas de este proyecto sigue un modelo modular, especialmente en lo que respecta a los estilos, para mantener el código limpio y fácil de mantener. La carpeta principal de estilos está organizada de la siguiente manera:

/artículos //Páginas en detalle de cada artículo 
/estilos/ 
	_footer.scss //Estilos específicos del footer
	_header.scss //stilos específicos del header
	_main.scss  //Estilos específicos del body
	_mixin.scss //Mixins reutilizables
	_productos.scss //Estilos específicos del body para los productos detallados
	_variables.scss //Definición de variables (colores)
	style.scss //Archivo principal que importa todos los partrials
/image //Todas las imágenes usadas en la web
/js/
	script.js //Todo el código JavaScript que usa la web
/index.html //Página principal donde están todos los productos 
/nueva-temporada //Página donde están solo los artículos que pertenecen a esta categoría
/oferta //Página donde están solo los artículos que pertenecen a esta categoría
/outlet //Página donde están solo los artículos que pertenecen a esta categoría
/rebajas //Página donde están solo los artículos que pertenecen a esta categoría
