## RETO N° 6 100 DAYS OF PROYECTS 

### 06-Results Summary Component06-

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1714237863824/d2d3fe47-4f50-477b-a0d0-30018f86493b.jpeg?auto=compress,format&format=webp" alt="Texto alternativo" width="800"/>

### Tecnologias
[![HTML](https://img.shields.io/badge/HTML5-orange?style=flat&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS](https://img.shields.io/badge/CSS3-blue?style=flat&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)


### Ver demo

[Demo](https://06-results-summary-component.vercel.app/)

## Desafio
Nuestra misión será crear un componente resumen de resultados, usando HTML y CSS, y lograr que se parezca lo más posible al diseño.
### Los usuarios deberían poder:

1-Ver un diseño óptimo en pantallas grandes(1200px) y pequeñas(375px).

2-Ver un color de fondo gradiente(hover) al pasar el mouse sobre el botón.

3-0Bonus: Muestra los datos en el diseño desde un archivo JSON JavaScript

### Importante:

Agrega un icono favicon al proyecto.

Agrega una URL fácil de recordar (ej. 06-results-summary-component).

Agrega un título al proyecto (ej. Results Summary Component - Frontend Club).

Bonus: Agrega un archivo readme.md al proyecto.

## Solución
### Resolución con React

En este proyecto, utilicé React para crear un componente de tarjeta (`Card`) que muestra un resumen de resultados. Además, utilicé un componente de ítem (`Item`) para mostrar los datos de diferentes categorías desde un archivo JSON (`data.json`).

### Estructura de archivos
El proyecto está organizado de la siguiente manera:

- `src/`
  - `components/`
    - `Card.js`: Componente de tarjeta principal.
    - `Item.js`: Componente de ítem para mostrar los datos.
  - `data/`
    - `data.json`: Archivo JSON con los datos de las categorías y puntajes.
  - `styles/`
    - `Index.css`: Estilos CSS generales.
    - `Card.css`: Estilos CSS para el componente de tarjeta.
    - `Item.css`: Estilos CSS para el componente de ítem.
  - `App.js`: Archivo principal donde se renderiza el componente `Card`.
  
### Funcionalidades

1. El componente de tarjeta muestra un diseño óptimo en pantallas grandes y pequeñas utilizando media queries.
2. El componente Item

El componente `Item` es responsable de mostrar cada elemento de los datos proporcionados en un diseño de tarjeta. Los estilos CSS se aplican dinámicamente según la categoría de cada elemento.

### Implementación en React

```javascript
const Item = ({data}) => {
  let categoryClass = '';
  switch (data.category.toLowerCase()) {
    case 'reaction':
      categoryClass = 'lightRed';
      break;
    case 'memory':
      categoryClass = 'orangeyYellow';
      break;
    case 'verbal':
      categoryClass = 'greenTeal';
      break;
    case 'visual':
      categoryClass = 'cobaltBlue';
      break;
    default:
      categoryClass = '';
  }
  return (
    <div className={`item ${categoryClass}`}>
      <div className='info'>
        <img src={data.icon} alt="icon" />
        <p className="category">{data.category}</p>
      </div>
      <div className='score'>
        <p>{data.score}</p>
        <p> / 100</p>
      </div>
    </div>
  )
}

export default Item;
```

### Estilos CSS
```
.item.lightRed {
  color: hsla(0, 100%, 67%, 1);
  background-color: hsla(0, 100%, 67%, 0.05); 
  font-weight: 800;
}

.item.orangeyYellow {
  color: hsla(39, 100%, 56%, 1);
  background-color: hsla(39, 100%, 56%, 0.05);
  font-weight: 800;
}

.item.greenTeal {
  color: hsla(166, 100%, 37%, 1);
  background-color: hsla(166, 100%, 37%, 0.05);
  font-weight: 800;
}

.item.cobaltBlue {
  color: hsla(234, 85%, 45%, 1);
  background-color: hsla(234, 85%, 45%, 0.05);
  font-weight: 800;
}
```
3. Al pasar el mouse sobre el botón, se muestra un color de fondo gradiente.
```
   button{
    width: 100%;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: var(--DarkGrayBlue);
    color: var(--White);
    font-size: 1rem;
    font-weight: 500;
    transition: background 5s ease-in-out;
}

button:hover{
    cursor: pointer;
    background: linear-gradient(var(--LightslateBlue), var(--LightRoyalBlue));
}
```
4. Los datos se cargan desde el archivo JSON y se muestran dinámicamente en el componente de tarjeta.
```
   import "./Card.css";
import data from "../data.json";
import Item from "./Item";

const Card = () => {
  return (
    <article className="card">
      <div className="result">
        <h3 className="subtitle">Your Result</h3>
        <div className="circle">
          <p className="number">76</p>
          <p className="text">of 100</p>
        </div>
        <h1 className="title">Great</h1>
        <p className="description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="content">
        <h3 className="subtitle-summary">Summary</h3>
        <div className="summary">
          {data.map((data, index) => (
           <Item key={index} data={data} />
          ))}
        </div>
        <button className="button">Continue</button>
      </div>
    </article>
  );
};

export default Card;
```

### Conclusiones
Este proyecto me permitió practicar el uso de React para crear componentes reutilizables y dinámicos. Aprendí a trabajar con archivos JSON para manejar datos y a aplicar estilos CSS para lograr un diseño atractivo y responsivo.

¡Gracias por revisar mi proyecto!

Para cualquier pregunta o comentario, no dudes en contactarme a través de mi correo electrónico: lohaorellano13@gmail.com
