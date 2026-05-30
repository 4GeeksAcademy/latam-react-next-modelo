const partidosGrupos = [
  {
    grupo: "A",
    fecha: "12/06/2026",
    partido: "Selección A1 vs Selección A2",
    estadio: "Ciudad de México",
  },
  {
    grupo: "B",
    fecha: "13/06/2026",
    partido: "Selección B1 vs Selección B2",
    estadio: "Toronto",
  },
  {
    grupo: "C",
    fecha: "14/06/2026",
    partido: "Selección C1 vs Selección C2",
    estadio: "Los Ángeles",
  },
  {
    grupo: "D",
    fecha: "15/06/2026",
    partido: "Selección D1 vs Selección D2",
    estadio: "Monterrey",
  },
  {
    grupo: "E",
    fecha: "16/06/2026",
    partido: "Selección E1 vs Selección E2",
    estadio: "Atlanta",
  },
  {
    grupo: "F",
    fecha: "17/06/2026",
    partido: "Selección F1 vs Selección F2",
    estadio: "Vancouver",
  },
];

export default function FixtureGruposPage() {
  return (
    <div>
      <section className="hero">
        <span className="chip">Fase de grupos</span>
        <h1>Fixture de grupos y fechas</h1>
        <p>
          Revisión rápida de los partidos iniciales del Mundial 2026. Esta
          vista está pensada para consultar día, cruce y sede de cada encuentro.
        </p>
      </section>

      <h2 className="section-title">Partidos destacados</h2>
      <section className="cards-grid cols-3">
        {partidosGrupos.map((partido) => (
          <article className="card" key={`${partido.grupo}-${partido.partido}`}>
            <span className="chip">Grupo {partido.grupo}</span>
            <h3>{partido.partido}</h3>
            <p>Fecha: {partido.fecha}</p>
            <p>Sede: {partido.estadio}</p>
          </article>
        ))}
      </section>
    </div>
  );
}