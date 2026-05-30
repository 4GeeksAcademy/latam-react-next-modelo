const cuartos = [
  { partido: "Cuarto 1", fecha: "09/07/2026" },
  { partido: "Cuarto 2", fecha: "10/07/2026" },
  { partido: "Cuarto 3", fecha: "11/07/2026" },
  { partido: "Cuarto 4", fecha: "11/07/2026" },
];

const semifinales = [
  {
    partido: "Semifinal 1",
    fecha: "14/07/2026",
    estadio: "AT&T Stadium (Dallas)",
  },
  {
    partido: "Semifinal 2",
    fecha: "15/07/2026",
    estadio: "Mercedes-Benz Stadium (Atlanta)",
  },
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
          <article className="card" key={partido.partido}>
            <span className="chip">Cuarto {index + 1}</span>
            <h3>{partido.partido}</h3>
            <p>Fecha oficial de ronda: {partido.fecha}</p>
            <p>Equipos y estadio: por confirmar tras octavos</p>
          </article>
        ))}
      </section>

      <h2 className="section-title">Semifinales</h2>
      <section className="cards-grid">
        {semifinales.map((partido, index) => (
          <article className="card" key={partido.partido}>
            <span className="chip">Semifinal {index + 1}</span>
            <h3>{partido.partido}</h3>
            <p>Fecha: {partido.fecha}</p>
            <p>Estadio: {partido.estadio}</p>
            <p>Equipos: por confirmar</p>
          </article>
        ))}
      </section>
    </div>
  );
}