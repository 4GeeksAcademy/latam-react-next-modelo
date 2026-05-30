import type { Metadata } from "next";
import Link from "next/link";
import { Sora, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Sora({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mundial 2026 | Fixture y Resultados",
  description:
    "Seguimiento del Mundial 2026 con información general, fixture, fechas y resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
    >
      <body>
        <div className="app-shell">
          <header className="top-nav">
            <nav className="top-nav-inner" aria-label="Navegación principal">
              <Link href="/" className="brand">
                Mundial 2026
              </Link>
              <Link href="/" className="nav-link">
                Inicio
              </Link>
              <Link href="/fixture-grupos" className="nav-link">
                Grupos
              </Link>
              <Link href="/fixture-octavos" className="nav-link">
                Octavos
              </Link>
              <Link href="/fixture-cuartos-semis" className="nav-link">
                Cuartos/Semis
              </Link>
              <Link href="/fixture-final" className="nav-link">
                Final
              </Link>
            </nav>
          </header>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
