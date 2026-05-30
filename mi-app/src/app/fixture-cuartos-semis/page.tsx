const cuartos = [
  "Ganador Octavos 1 vs Ganador Octavos 2",
  "Ganador Octavos 3 vs Ganador Octavos 4",
  "Ganador Octavos 5 vs Ganador Octavos 6",
  "Ganador Octavos 7 vs Ganador Octavos 8",
];

const semifinales = [
  "Ganador Cuartos 1 vs Ganador Cuartos 2",
  "Ganador Cuartos 3 vs Ganador Cuartos 4",
];

export default function FixtureCuartosSemisPage() {
  return (
    <div>
      <section className="hero">
        <span className="chip">Tramo decisivo</span>
        <h1>Cuartos y semifinales</h1>
        <p>
          Cruces proyectados para las rondas previas a la final. Esta vista
          permite seguir el camino de cada selección desde octavos hasta la
          definición del torneo.
        </p>
      </section>

      <h2 className="section-title">Cuartos de final</h2>
      <section className="cards-grid">
        {cuartos.map((partido, index) => (
          <article className="card" key={partido}>
            <span className="chip">Cuarto {index + 1}</span>
            <h3>{partido}</h3>
            <p>Resultado: pendiente</p>
          </article>
        ))}
      </section>

      <h2 className="section-title">Semifinales</h2>
      <section className="cards-grid">
        {semifinales.map((partido, index) => (
          <article className="card" key={partido}>
            <span className="chip">Semifinal {index + 1}</span>
            <h3>{partido}</h3>
            <p>Resultado: pendiente</p>
          </article>
        ))}
      </section>
    </div>
  );
}