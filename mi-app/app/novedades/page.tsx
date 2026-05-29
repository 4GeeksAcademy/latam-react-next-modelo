import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function NovedadesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-emerald-50 via-lime-50 to-green-100 text-emerald-950">
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <section className="rounded-[2rem] border border-emerald-200/80 bg-white/70 p-8 backdrop-blur sm:p-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Novedades</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-900/80">
            Mantente al dia con lanzamientos, nuevas marcas y mejoras en
            nuestras lineas de suplementos.
          </p>

          <div className="mt-8 space-y-4">
            <article className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-100/80 to-lime-100/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                Lanzamiento
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Recovery+ 2026</h2>
              <p className="mt-3 text-sm leading-7 text-emerald-900/80">
                Formulacion avanzada para recuperacion muscular progresiva.
              </p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                Alianza
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Nueva marca importada</h2>
              <p className="mt-3 text-sm leading-7 text-emerald-900/80">
                Incorporamos productos premium para alto rendimiento.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
