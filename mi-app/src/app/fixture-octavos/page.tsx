const crucesOctavos = [
  { partido: "Octavos 1", fecha: "04/07/2026" },
  { partido: "Octavos 2", fecha: "04/07/2026" },
  { partido: "Octavos 3", fecha: "05/07/2026" },
  { partido: "Octavos 4", fecha: "05/07/2026" },
  { partido: "Octavos 5", fecha: "06/07/2026" },
  { partido: "Octavos 6", fecha: "06/07/2026" },
  { partido: "Octavos 7", fecha: "07/07/2026" },
  { partido: "Octavos 8", fecha: "07/07/2026" },
];

export default function FixtureOctavosPage() {
  return (
    <div>
      <section className="hero">
        <span className="chip">Ronda eliminatoria</span>
        <h1>Posibles cruces de octavos de final</h1>
        <p>
          Los octavos se disputan del 04/07/2026 al 07/07/2026. Los equipos y
          la asignación final de estadio por partido se confirman cuando cierra
          la fase de grupos.
        </p>
      </section>

      <h2 className="section-title">Llave de octavos</h2>
      <section className="cards-grid cols-3">
        {crucesOctavos.map((cruce, index) => (
          <article className="card" key={cruce.partido}>
            <span className="chip">Partido {index + 1}</span>
            <h3>{cruce.partido}</h3>
            <p>Fecha oficial de ronda: {cruce.fecha}</p>
            <p>Equipos: por confirmar según clasificación</p>
            <p>Estadio: asignación oficial pendiente por FIFA</p>
          </article>
        ))}
      </section>
    </div>
  );
}