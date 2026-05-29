import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function ProductosPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-emerald-50 via-lime-50 to-green-100 text-emerald-950">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <section className="rounded-[2rem] border border-emerald-200/80 bg-white/70 p-8 backdrop-blur sm:p-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Productos</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-900/80">
            Seleccionamos suplementos alimenticios para atletas y personas
            activas que buscan un rendimiento superior con respaldo de calidad.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <h2 className="text-xl font-semibold">Proteina Whey</h2>
              <p className="mt-2 text-sm leading-7 text-emerald-900/75">
                Recuperacion muscular y aporte proteico de alta absorcion.
              </p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <h2 className="text-xl font-semibold">Creatina</h2>
              <p className="mt-2 text-sm leading-7 text-emerald-900/75">
                Mejora de fuerza y desempeno para entrenamientos exigentes.
              </p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <h2 className="text-xl font-semibold">Pre-Workout</h2>
              <p className="mt-2 text-sm leading-7 text-emerald-900/75">
                Energia previa al entrenamiento con enfoque y resistencia.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
