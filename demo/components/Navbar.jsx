"use client";

import React from 'react';
import Link from 'next/link';
import BtnFavorites from '@/components/BtnFavorites';

// 1. Crear la función con el nombre del Componente
// 1.1 Exportando la función
export const Navbar = () => {
  // 2. Código de JavaScript (si es necesario)
  
  // 3. Retornar el JSX (un solo elemento HTML)
  return (
    <div>
      <nav className="flex items-center justify-between bg-blue-500 p-4 text-white">
        <ul className="flex flex-wrap items-center gap-4">
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
          <li>
          | <Link href="/contact-form" className="hover:underline">
              Contactos 2
            </Link>
          </li>
          <li>
          | <Link href="/counter" className="hover:underline">
              Counter
            </Link>
          </li>
          <li>
          | <Link href="/characters" className="hover:underline">
              Characters
            </Link>
          </li>
        </ul>

        <BtnFavorites />
      </nav>
    </div>
  )
}