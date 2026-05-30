# Estructura de rutas y navegación (Next.js)

## Rutas principales
Implementa las siguientes rutas usando el sistema de archivos de Next.js (coloca un archivo `page.tsx` en cada carpeta):

- `/` (home): Información general del Mundial 2026.
- `/fixture-grupos`: Detalle de los partidos de fase de grupos, con fechas y grupos.
- `/fixture-octavos`: Tabla de posibles octavos de final.
- `/fixture-cuartos-semis`: Tabla de posibles cuartos de final y semifinal.
- `/fixture-final`: Tabla de posible final.

Ejemplo de estructura de carpetas:

```
src/app/
	page.tsx                # Home
	fixture-grupos/
		page.tsx              # Fixture grupos
	fixture-octavos/
		page.tsx              # Octavos
	fixture-cuartos-semis/
		page.tsx              # Cuartos y semis
	fixture-final/
		page.tsx              # Final
```

## Navbar global
Para que el navbar sea visible en todas las vistas, agrégalo en el archivo `src/app/layout.tsx`.

Ejemplo básico de implementación:

```tsx
// src/app/layout.tsx
import Link from 'next/link';

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<nav style={{ padding: '1rem', background: 'rgba(255,255,255,0.8)', display: 'flex', gap: '2rem', fontWeight: 600 }}>
					<Link href="/">Inicio</Link>
					<Link href="/fixture-grupos">Grupos</Link>
					<Link href="/fixture-octavos">Octavos</Link>
					<Link href="/fixture-cuartos-semis">Cuartos/Semis</Link>
					<Link href="/fixture-final">Final</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
```

Puedes personalizar el estilo del navbar usando Tailwind CSS o CSS propio, pero debe estar en `layout.tsx` para que se muestre en todas las páginas.
