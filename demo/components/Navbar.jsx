import React from 'react';
import Link from 'next/link';

// 1. Crear la función con el nombre del Componente
// 1.1 Exportando la función
export const Navbar = () => {
  // 2. Código de JavaScript (si es necesario)
  
  // 3. Retornar el JSX (un solo elemento HTML)
  return (
    <div>
      <nav className="bg-blue-500 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
          | <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}