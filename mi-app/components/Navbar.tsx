import Link from "next/link";

const navItems = [
  { label: "Productos", href: "/productos" },
  { label: "Recetas", href: "/recetas" },
  { label: "Novedades", href: "/novedades" },
  { label: "Nosotros", href: "/nosotros" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-200/70 bg-emerald-50/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="text-lg font-bold tracking-tight text-emerald-900">
          CaribeFuel
        </Link>

        <ul className="flex items-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800 transition hover:bg-emerald-100 sm:text-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};