# Simulador de la Ley de Coulomb

Simulador interactivo hecho con **HTML, CSS y JavaScript**, sin frameworks ni dependencias. Puedes publicarlo gratis con GitHub Pages.

## Funciones

- Modifica las cargas eléctricas `q₁` y `q₂`.
- Cambia la distancia entre las cargas.
- Calcula la magnitud de la fuerza con la ley de Coulomb.
- Indica si las cargas se atraen, se repelen o si la fuerza es nula.
- Actualiza el diagrama en tiempo real.
- Botón para restablecer los valores iniciales.
- Diseño adaptable a pantallas móviles.

## Ecuación

`F = k · |q₁q₂| / r²`

Donde:
- `F` es la magnitud de la fuerza eléctrica, en newtons (N).
- `k = 8.99 × 10⁹ N·m²/C²` es la constante de Coulomb aproximada en el vacío.
- `q₁` y `q₂` son las cargas, en coulombs (C).
- `r` es la distancia entre las cargas, en metros (m).

Las cargas con signos opuestos se atraen; las cargas con el mismo signo se repelen. La fuerza sobre cada carga tiene la misma magnitud y dirección opuesta (tercera ley de Newton).

> Nota: el simulador muestra la magnitud de la fuerza. Se usa un modelo ideal de dos cargas puntuales en el vacío, no un sistema de objetos con tamaño real.

## Ejecutarlo en tu computadora

1. Descarga o clona este repositorio.
2. Abre `index.html` en un navegador moderno.
3. No necesita instalar nada ni iniciar un servidor.

## Publicarlo en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `simulador-ley-coulomb`.
2. Sube `index.html`, `style.css`, `script.js` y `README.md` a la raíz del repositorio.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub genere la dirección pública de tu sitio.

## Personalización

- Cambia los valores iniciales en los atributos `value` de los controles en `index.html`.
- Ajusta los rangos `min`, `max` y `step` para cambiar los límites.
- Modifica colores y distribución en `style.css`.
- Cambia la representación y los textos en `script.js`.
