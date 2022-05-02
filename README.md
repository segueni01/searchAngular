# Buscador en Angular

Este proyecto permite buscar en los posts registrados en la api `https://jsonplaceholder.typicode.com/`

Pasos de la solucion
1. Se consumen 2 endpoints de la API que son `/posts` y `/users`
2. se guardan los datos de los endpoints en 2 arreglos distintos
3. Creamos un tercer arreglo que almacenara los datos de los 2 endpoints en uno solo, para asi mostrar
   un solo arreglo, esto con el fin de saber quien fue el autor y correo del autor del post y poder llevar una mejor busqueda
   (Esto se hizo con el metodo .map)
4. Se utilizo un pipe para filtrar por palabras claves, como el autor, el correo, y el post y titulo
   (distingue entre mayusculas y minisculas).
5. Tambien se realizo un filtro para mostrar 10 posts por cada pagina.

Nota: Las imagenes de evidencia estan en la carpeta `img`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate` component component-name to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module.`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod `flag for a production build.