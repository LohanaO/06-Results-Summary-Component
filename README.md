## RETO N° 6 100 DAYS OF PROYECTS 

### 06-Results Summary Component06-

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1714237863824/d2d3fe47-4f50-477b-a0d0-30018f86493b.jpeg?auto=compress,format&format=webp" alt="Texto alternativo" width="800"/>

### Tecnologias
[![HTML](https://img.shields.io/badge/HTML5-orange?style=flat&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS](https://img.shields.io/badge/CSS3-blue?style=flat&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)


### Ver demo

[Demo](https://lohanao.github.io/-05-product-preview-card-component/)

## Desafio
### Los usuarios deberían poder:

1-Ver el diseño óptimo en pantallas grandes(1200px) y pequeñas(375px).

2-Ver un color diferente(hover) al pasar el mouse sobre el botón.

### Importante:

Agrega icono favicon al proyecto.

Agrega una URL fácil de recordar (ej. 05-product-preview-card-component).

Agrega un título al proyecto (ej. Product Preview Card Component - Frontend Club).

Bonus: Agrega un archivo readme.md al proyecto

## Solución
### Resolución con HTML y CSS
En este proyecto, utilicé HTML y CSS para crear un componente de vista previa de producto que muestra información esencial sobre un producto, como su nombre, precio y descripción. El diseño es responsive, lo que significa que se adapta para brindar una experiencia óptima en dispositivos móviles y de escritorio.

### Estructura HTML
El contenido de la tarjeta de producto se estructuró utilizando elementos HTML semánticos para mejorar la accesibilidad y el SEO del sitio web. A continuación se muestra una vista general de la estructura HTML utilizada:

```
html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="shortcut icon" href="img/favicon-32x32.png" type="image/png">
    <title>Product Preview Card Component - Frontend Club</title>
  </head>
  <body>
    <main class="container">
      <div class="card">
        <img class="mobile" src="img/image-product-mobile.jpg" alt="image movile" />
        <img class="desktop" src="img/image-product-desktop.jpg" alt="">
        <div class="content">
          <h4>PERFUME</h4>

          <h2>Gabrielle Essence Eau De Parfum</h2>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div class="price-container">
            <p class="price">$149.99</p>
            <p class="price2">$169.99</p>
          </div>
          <div class="btn">
            <button>
              <img src="img/icon-cart.svg" alt="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>

```


Se definieron estilos para el contenedor y la tarjeta del producto, así como para la imagen del producto
y otros elementos como el nombre, precio y descripción. Se agregaron efectos de sombra y
transiciones para mejorar la apariencia y la experiencia del usuario al interactuar con el componente.
### Comence por la version movil y luego con media query pase a la version desktop.
### Defini estilos básicos para el contenedor y la tarjeta:
#### El contenedor debe tener un estilo para centrar su contenido verticalmente y horizontalmente. Puedes lograr esto usando display: flex, justify-content: center y align-items: center. En este caso use flex para moviles y grid para deskto
### Estilizar la imagen del producto:
#### La imagen debe ocupar todo el espacio disponible en la tarjeta. Puedes lograr esto usando width: 100% y height: 100% junto con object-fit: cover para mantener la proporción de la imagen.
#### Estilizar los otros elementos de la tarjeta según sea necesario:
Utilice hover en el boton para que cambe su color y haga una sombra cuando se pasa el mouse por encima.
```
.btn:hover {
  cursor:pointer;
  background-color: #b4915b;
  box-shadow: 0 0 10px 5px hsl(42, 96%, 9%);
}

```
### Utilice una pequeña animacion para cuando carga la card de desvanecer
```
.card {
  display: flex;
  flex-direction: column;
  background-color:  hsl(0, 0%, 100%);
  border-radius: 10px;
  width: 90%;
  animation: fadeIn 2s ease-in-out;

}

@keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
```
## Conclusiones
En conclusión, la creación de este componente de vista previa de producto fue un ejercicio práctico para mejorar mis habilidades en HTML y CSS, sobre todo trabajar diseño responsivo y animaciones. Espero que este README te haya proporcionado una buena comprensión del proyecto y de mi proceso de desarrollo.

¡Gracias por revisar mi proyecto!

Para cualquier pregunta o comentario, no dudes en contactarme a través de mi correo electrónico: lohaorellano13@gmail.com
