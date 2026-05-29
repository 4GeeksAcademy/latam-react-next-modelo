import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function NosotrosPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-emerald-50 via-lime-50 to-green-100 text-emerald-950">
      <div className="pointer-events-none absolute -top-16 left-8 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <section className="rounded-[2rem] border border-emerald-200/80 bg-white/70 p-8 backdrop-blur sm:p-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Nosotros</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-900/80">
            Somos una empresa con 5 anos de experiencia distribuyendo
            suplementos alimenticios en la zona del Caribe.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-emerald-700">Experiencia</p>
              <p className="mt-2 text-4xl font-semibold">5+ anos</p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-emerald-700">Cobertura</p>
              <p className="mt-2 text-4xl font-semibold">Caribe</p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-emerald-700">Compromiso</p>
              <p className="mt-2 text-4xl font-semibold">Calidad</p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
