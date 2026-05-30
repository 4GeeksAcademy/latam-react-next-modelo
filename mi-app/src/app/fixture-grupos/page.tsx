const partidosConfirmados = [
  {
    etiqueta: "Partido inaugural",
    fecha: "11/06/2026",
    partido: "México vs rival por sorteo",
    estadio: "Estadio Azteca (Ciudad de México)",
  },
];

const estadiosSede = [
  "Estadio Azteca (Ciudad de México)",
  "Estadio BBVA (Monterrey)",
  "Estadio Akron (Guadalajara)",
  "BC Place (Vancouver)",
  "BMO Field (Toronto)",
  "Mercedes-Benz Stadium (Atlanta)",
  "Gillette Stadium (Boston)",
  "AT&T Stadium (Dallas)",
  "NRG Stadium (Houston)",
  "Arrowhead Stadium (Kansas City)",
  "SoFi Stadium (Los Ángeles)",
  "Hard Rock Stadium (Miami)",
  "MetLife Stadium (Nueva York/Nueva Jersey)",
  "Lincoln Financial Field (Filadelfia)",
  "Lumen Field (Seattle)",
  "Levi's Stadium (San Francisco Bay Area)",
];

export default function FixtureGruposPage() {
  return (
    <div>
      <section className="hero">
        <span className="chip">Fase de grupos</span>
        <h1>Fixture de grupos y fechas</h1>
        <p>
          Fase de grupos oficial del 11/06/2026 al 27/06/2026. Los cruces de
          cada grupo se definen por sorteo, pero las sedes anfitrionas y la
          fecha del partido inaugural ya están confirmadas.
        </p>
      </section>

      <h2 className="section-title">Partidos confirmados</h2>
      <section className="cards-grid cols-3">
        {partidosConfirmados.map((partido) => (
          <article className="card" key={partido.etiqueta}>
            <span className="chip">{partido.etiqueta}</span>
            <h3>{partido.partido}</h3>
            <p>Fecha: {partido.fecha}</p>
            <p>Sede: {partido.estadio}</p>
          </article>
        ))}
      </section>

      <h2 className="section-title">Estadios sede confirmados</h2>
      <section className="cards-grid cols-3">
        {estadiosSede.map((estadio) => (
          <article className="card" key={estadio}>
            <h3>{estadio}</h3>
            <p>Etapa con partidos: fase de grupos y/o eliminatorias.</p>
          </article>
        ))}
      </section>
    </div>
  );
}