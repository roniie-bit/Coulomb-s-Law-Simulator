# Simulador de la Ley de Coulomb

Simulador interactivo hecho con **HTML, CSS y JavaScript**, sin frameworks ni dependencias.

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
