const crucesOctavos = [
  "1A vs 2B",
  "1C vs 2D",
  "1E vs 2F",
  "1G vs 2H",
  "1B vs 2A",
  "1D vs 2C",
  "1F vs 2E",
  "1H vs 2G",
];

export default function FixtureOctavosPage() {
  return (
    <div>
      <section className="hero">
        <span className="chip">Ronda eliminatoria</span>
        <h1>Posibles cruces de octavos de final</h1>
        <p>
          Esta tabla muestra el armado típico de octavos según la posición final
          en fase de grupos. Los cruces definitivos se actualizan al cierre de
          cada zona.
        </p>
      </section>

      <h2 className="section-title">Llave de octavos</h2>
      <section className="cards-grid cols-3">
        {crucesOctavos.map((cruce, index) => (
          <article className="card" key={cruce}>
            <span className="chip">Partido {index + 1}</span>
            <h3>{cruce}</h3>
            <p>Fecha estimada: junio de 2026</p>
            <p>Resultado: pendiente</p>
          </article>
        ))}
      </section>
    </div>
  );
}