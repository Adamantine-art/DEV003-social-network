# Social Network: Beat!

## Índice

* [1. Definición del Producto](#1-definicion-del-producto)
* [2. Historias de usuario](#2-resumen-del-proyecto)
* [3. Diseño de la Interfaz de Usuario](#3-objetivos-de-aprendizaje)
* [4. Implementación de la Interfaz de Usuario](#4-implementacion-de-la-interfaz-de-usuario)


***

## 1. Definición del Producto

Se busca como objetivo crear una red social que tendrá como función crear, editar, borrar y dar likes a publicaciones sobre álbumes y artistas musicales. La usuaria será capaz de registrarse a través de una cuenta de usuario para posteriormente dirigirse a la página de Home y seleccionar la categoría de su interés, que en este caso nosotras desarrollamos la sección de álbumes.

En este proyecto se desarrolló una SPA (Single Page Application) con temática de red social implementando rutas para la navegación entre las diferentes vistas de la aplicación, aplicando los conceptos de responsividad en el desarrollo de las vistas mediante media queries. Adicionalmente se desarrollaron pruebas unitarias que permiten testear el código asíncrono utilizado a lo largo de todo el proyecto.


## 2. Historias de usuario

Las historias de usuario son el primer paso para construir Beat!, ya que responden a las necesidades específicas de quien vaya a hacer uso de esta interfaz.

A continuación se enumeran las historias de usuario a partir de las cuales trabajamos:

### Historia N°1: "Como amante de la música y de las redes sociales, me interesa tener un perfil personalizado para hacer uso de una app de reviews con temática musical".

* Definición de terminado: crear pantallas de Sign Up y Log In.

* Criterios de aceptación: tener una estructura definida, ordenada e intuitiva para el usuario, que permita de forma fácil registrarse en la app mediante un correo electrónico o con su cuenta de Google.

### Historia N°2: "Como amante de la música me interesa compartir un review de mis álbumes preferidos para apoyar el trabajo de los artistas".

* Definición de terminado: crear pantalla de Reviews y habilitar función de comentar.

* Criterios de aceptación: tener un campo de texto funcional para que el usuario pueda comentar el álbum, con su respectivo botón de "Publicar".

### Historia N°3: "Como amante de la música me interesa leer los reviews de otros usuarios para aventurarme en diferentes estilos musicales".

* Definición de terminado: proyectar el historial de reviews realizados.

* Criterios de aceptación: mostrar una lista de reviews con los estilos previamente definidos en el prototipo de alta fidelidad.


## 3. Diseño de la Interfaz de Usuario

Nuestro proceso creativo consta principalmente de 4 etapas fundamentales:

* Búsqueda de referencias
* Diseño Centrado en el Usuario (DCU) - Historias de usuario
* Prototipado en baja y alta fidelidad
* Testeo de prototipo con usuarios

### Referencias

Buscamos páginas web que cumplieran más o menos con los mismos objetivos a los que apuntamos nosotras para considerarlas como posibles soluciones o bien hacer una combinación de todas ellas.

Todas las referencias que utilizamos, nuestro prototipo de baja y alta fidelidad, propuestas de paleta de colores y categorías a trabajar las puedes encontrar en nuestro enlace de Figma acá abajo.

[](https://www.figma.com/file/5Mz2YzPSWjcehDhmdzUA8T/Social-Network?node-id=0%3A1&t=aMKunrqXa3NXOZzB-0)

### Diseño Centrado en el Usuario (DCU)

Como principio fundamental del Diseño UX hemos puesto a la usuaria al centro de todo, creando a partir de sus necesidades el prototipo y la toma de desiciones, también considerando los fundamentos del Visual Design e iterando a través del feedback que hemos conseguido con los Test de Usabilidad de nuestro prototipo de alta fidelidad.

Como cambio fundamental en nuestro prototipo de alta fidelidad podemos mencionar:

* el cambio de posición del botón de Google a la parte superior del formulario para tener una mejor lectura visual de los elementos.


### Prototipo de baja fidelidad

  De todas las referencias recolectadas previamente se tomaron ideas de cada una para dar paso a la creación del prototipo de baja fidelidad en colores grises y sin imágenes ni texto definido, rescatando la estructura y la idea principal que se desarrollará en los pasos posteriores.

### Prototipo de alta fidelidad

  Nos dividimos los prototipos de alta fidelidad: una trabajó la versión de escritorio y la otra trabajó la versión mobile.
  Después del Test de Usuario como equipo decidimos modificar algunos elementos a partir del feedback recibido.
  Finalmente nos basamos en el prototipo ya modificado para dar paso a la estructura del HTML y CSS.

- [ ] **Diseñados en la herramienta de Figma**

  <details><summary>Link a Figma</summary><p>

  * [link a Figma](https://www.figma.com/file/5Mz2YzPSWjcehDhmdzUA8T/Social-Network?node-id=0%3A1&t=aMKunrqXa3NXOZzB-0)
</p></details>

### Testeos de usabilidad

- [ ] **Test de usuarios a través de Maze**

  <details><summary>Link a Maze</summary><p>

  * [Link a los resultados del test de usuario interactivo](https://app.maze.co/projects/140751886/mazes/140751888/results)
</p></details>


## 4. Implementación de la Interfaz de Usuario (HTML/CSS/JS)

La implementación consta en:

* HTML: Se contruyó de manera dinámica principalmente en hojas de Javascript utilizando el método createElement, innerHTML y template Strings, dividiendo cada vista por separado, agrupándolas en una carpeta de componentes.

* CSS: Se agregaron estilos a cada sección correspondiente. La interfaz sigue los fundamentos del Visual Design.

Es responsive, se visualiza sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops. Se trabajó con Media Queries.

* JavaScript: Este proyecto se realizó con Firebase y sin utilizar ningún framework. Se crearon las rutas correspondientes y se definió el flujo de navegación utilizando window History, para luego crear los componentes que van a construir nuestra página web, además de testear la función asíncrona de Sign Up.


### Pruebas unitarias

#### Listado de problemas:

* la función de SignUp se tarda demasiado en testearse, por lo que se opta por agregar el método de finally dentro de la promesa, para definir cuándo termina de testearse dicha función.
* debe mostrar error cuando el usuario no llene todos los campos.
* debe mostrar error cuando la constraseña tenga menos de 6 caracteres.
