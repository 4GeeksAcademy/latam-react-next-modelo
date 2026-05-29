import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-emerald-50 via-lime-50 to-green-100 text-emerald-950">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <section className="rounded-[2rem] border border-emerald-200/80 bg-white/65 p-8 backdrop-blur sm:p-12">
          <p className="mb-6 inline-flex w-fit rounded-full border border-emerald-300/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Venta de Suplementos
          </p>

          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Energia limpia
              <br />
              para deportistas
              <br />
              del Caribe.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-emerald-900/80 sm:text-xl">
              Distribuimos suplementos alimenticios desde hace 5 anos con un
              enfoque claro: calidad, confianza y resultados reales.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/productos"
              className="rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-50 transition hover:bg-emerald-800"
            >
              Ver Productos
            </Link>
            <Link
              href="/recetas"
              className="rounded-full border border-emerald-400 bg-white/75 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-800 transition hover:bg-emerald-50"
            >
              Explorar Recetas
            </Link>
          </div>
        </section>

        <section id="productos" className="scroll-mt-28 mt-10 rounded-[2rem] border border-emerald-200/80 bg-white/70 p-8 backdrop-blur sm:p-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Productos</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-900/80">
            Proteinas, aminoacidos, creatinas y vitaminas seleccionadas para
            rendimiento, recuperacion y bienestar integral.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <h3 className="text-xl font-semibold">Proteina Whey</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-900/75">
                Alta pureza y absorcion rapida para ganar masa muscular.
              </p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <h3 className="text-xl font-semibold">Creatina Monohidratada</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-900/75">
                Potencia, fuerza y mejor desempeno en sesiones intensas.
              </p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <h3 className="text-xl font-semibold">Pre-Workout</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-900/75">
                Formula equilibrada para energia sostenida y enfoque mental.
              </p>
            </article>
          </div>
        </section>

        <section id="recetas" className="scroll-mt-28 mt-10 rounded-[2rem] border border-emerald-200/80 bg-white/70 p-8 backdrop-blur sm:p-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Recetas</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-900/80">
            Ideas practicas para integrar suplementos a tu rutina diaria sin
            perder sabor ni balance nutricional.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6">
              <h3 className="text-2xl font-semibold tracking-tight">Smoothie Post-Entreno</h3>
              <p className="mt-3 text-sm leading-7 text-emerald-900/75">
                Proteina whey + banano + avena + leche vegetal para una
                recuperacion completa.
              </p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6">
              <h3 className="text-2xl font-semibold tracking-tight">Bowl Energetico</h3>
              <p className="mt-3 text-sm leading-7 text-emerald-900/75">
                Yogur griego + frutas tropicales + granola + colageno en polvo.
              </p>
            </article>
          </div>
        </section>

        <section id="novedades" className="scroll-mt-28 mt-10 rounded-[2rem] border border-emerald-200/80 bg-white/70 p-8 backdrop-blur sm:p-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Novedades</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-900/80">
            Lanzamientos, alianzas y nuevas marcas para seguir elevando el
            nivel del deporte en la region.
          </p>
          <div className="mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-100/80 to-lime-100/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Nuevo ingreso
            </p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">
              Linea Recovery+ 2026
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-900/80">
              Suplementos para recuperacion muscular con minerales y enzimas de
              absorcion progresiva.
            </p>
          </div>
        </section>

        <section id="nosotros" className="scroll-mt-28 mt-10 rounded-[2rem] border border-emerald-200/80 bg-white/70 p-8 backdrop-blur sm:p-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Acerca de nosotros
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-900/80">
            Somos una empresa distribuidora en la zona del Caribe con 5 anos de
            experiencia, comprometida con asesorar atletas, gimnasios y tiendas
            especializadas con atencion cercana y entregas consistentes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-emerald-700">Experiencia</p>
              <p className="mt-2 text-4xl font-semibold">5+ anos</p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-emerald-700">Cobertura</p>
              <p className="mt-2 text-4xl font-semibold">Zona Caribe</p>
            </article>
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-emerald-700">Foco</p>
              <p className="mt-2 text-4xl font-semibold">Rendimiento</p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
