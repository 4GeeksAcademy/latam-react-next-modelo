import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <span className="chip">Canadá · México · Estados Unidos</span>
        <h1>Mundial 2026: fixture, fechas y resultados en un solo lugar</h1>
        <p>
          Esta plataforma resume la información principal del torneo para seguir
          cada etapa con rapidez y claridad. Encontrarás cronogramas, cruces
          posibles y resultados para acompañar todo el camino hacia la final.
        </p>
      </section>

      <h2 className="section-title">Rutas principales</h2>
      <section className="cards-grid cols-3">
        <article className="card">
          <h3>Fixture de grupos</h3>
          <p>
            Consulta partidos de fase inicial ordenados por grupo y fecha.
          </p>
          <Link href="/fixture-grupos" className="nav-link">
            Ver grupos
          </Link>
        </article>
        <article className="card">
          <h3>Camino de octavos</h3>
          <p>
            Revisa cómo se arman los cruces con primeros y segundos de cada
            zona.
          </p>
          <Link href="/fixture-octavos" className="nav-link">
            Ver octavos
          </Link>
        </article>
        <article className="card">
          <h3>Etapa final</h3>
          <p>
            Sigue cuartos, semifinales y la gran final con fechas estimadas.
          </p>
          <Link href="/fixture-final" className="nav-link">
            Ver final
          </Link>
        </article>
      </section>

      <h2 className="section-title">Información general</h2>
      <section className="cards-grid">
        <article className="card">
          <h3>Formato del torneo</h3>
          <ul>
            <li>48 selecciones participantes.</li>
            <li>Fase de grupos + rondas eliminatorias.</li>
            <li>Calendario extendido para más partidos.</li>
          </ul>
        </article>
        <article className="card">
          <h3>Qué encontrarás aquí</h3>
          <ul>
            <li>Fechas clave por etapa.</li>
            <li>Cruces posibles por rendimiento en grupos.</li>
            <li>Espacio para actualizar marcadores de cada encuentro.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
