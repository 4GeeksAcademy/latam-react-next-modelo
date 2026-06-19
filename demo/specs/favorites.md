Funcionalidad Favoritos

- Contexto
  - Utilizando useContext() crea un array 'favorites' y asígnele un array vacío
  - Crea la función addFavorite() para agregar un elemento a ese array
  - Crea la función removeFavorite() para eliminar un elemento de ese array
- componente: BtnFavorites
  - Crea un componente BtnFavorites del tipo boton-dropdown para: 
    - Mostrar un listado de 'favorites' y un botón con icono para borrar (trash) 
  - Cree un evento onClick para removeFavorite() en el botón "trash"
  - Muestra un badge con el largo de la lista 'favorites'
  - Agrega el el componente en el NavBar
  - limite de visualizacion de 5 elemento, si son más muestra un scrool
- componente: Characters (ya existe)
  - Agrega un boton con icono de corazon
  - Si el elemento está en 'favorites'
    - Icono con relleno full y onClick ejecuta removeFavorite()
  - Si el elemento no está en 'favorites'
    - Icono con sin rrelleno y onClick ejecuta addFavorite()
  