import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-300/70 bg-emerald-50/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-emerald-900/85 sm:px-10 lg:px-16">
        <p className="text-base font-semibold tracking-wide">CaribeFuel</p>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800 sm:text-sm">
          <Link href="/productos" className="rounded-full px-3 py-2 transition hover:bg-emerald-100">
            Productos
          </Link>
          <Link href="/recetas" className="rounded-full px-3 py-2 transition hover:bg-emerald-100">
            Recetas
          </Link>
          <Link href="/novedades" className="rounded-full px-3 py-2 transition hover:bg-emerald-100">
            Novedades
          </Link>
          <Link href="/nosotros" className="rounded-full px-3 py-2 transition hover:bg-emerald-100">
            Acerca de nosotros
          </Link>
        </div>
        <p className="text-xs text-emerald-900/70">
          Distribucion de suplementos alimenticios para deportistas en el Caribe. {year}
        </p>
      </div>
    </footer>
  );
};