import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function RecetasPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-emerald-50 via-lime-50 to-green-100 text-emerald-950">
      <div className="pointer-events-none absolute top-8 right-8 h-64 w-64 rounded-full bg-lime-200/40 blur-3xl" />
      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <section className="rounded-[2rem] border border-emerald-200/80 bg-white/70 p-8 backdrop-blur sm:p-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Recetas</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-900/80">
            Recetas funcionales para combinar nutricion, sabor y objetivos
            deportivos en tu rutina diaria.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Smoothie de Recuperacion</h2>
              <p className="mt-3 text-sm leading-7 text-emerald-900/75">
                Whey protein + banano + avena + leche de almendra.
              </p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Bowl Tropical Energetico</h2>
              <p className="mt-3 text-sm leading-7 text-emerald-900/75">
                Yogur griego + mango + granola + colageno en polvo.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
