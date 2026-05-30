# Tema visual: Celeste Blanco Minimalista

## Concepto
Interfaz minimalista inspirada en la bandera argentina: clara, limpia y moderna.
La prioridad visual debe ser el contenido (fixture, fechas y resultados), con bloques amplios, espacios generosos y tipografia grande.

## Paleta de color
- Celeste principal: `#74ACDF`
- Celeste suave: `#CFE7FA`
- Blanco base: `#FFFFFF`
- Gris texto principal: `#1F2937`
- Gris texto secundario: `#6B7280`
- Borde suave: `#E5E7EB`

## Fondo tipo bandera argentina
Aplicar un fondo de tres franjas horizontales de alto completo:
- Franja superior: celeste suave.
- Franja central: blanca.
- Franja inferior: celeste suave.

Sugerencia CSS:

```css
background: linear-gradient(
	to bottom,
	#cfe7fa 0%,
	#cfe7fa 33.33%,
	#ffffff 33.33%,
	#ffffff 66.66%,
	#cfe7fa 66.66%,
	#cfe7fa 100%
);
```

## Tipografia
- Estilo: sans-serif moderna y limpia.
- Jerarquia con letras grandes:
	- Titulos principales: `clamp(2rem, 4vw, 3.5rem)`
	- Subtitulos: `clamp(1.25rem, 2.2vw, 2rem)`
	- Texto general: `clamp(1rem, 1.3vw, 1.125rem)`
- Peso recomendado:
	- Titulos: `700`
	- Texto normal: `400-500`

## Componentes
- Cards blancas con bordes suaves y sombra muy ligera.
- Esquinas redondeadas moderadas (`12px` o `16px`).
- Botones primarios en celeste principal con texto oscuro para alto contraste.
- Estados hover sutiles (oscurecer celeste un 8-10%).

## Espaciado y composicion
- Layout aireado con `padding` amplio.
- Grid simple de 1 columna en mobile y 2-3 columnas en desktop.
- Evitar saturacion visual: usar pocos colores y pocas decoraciones.

## Reglas de estilo
- Minimalismo real: menos elementos decorativos, mas claridad.
- Contraste accesible entre texto y fondo.
- Consistencia en margenes, radios y tipografias en toda la app.
