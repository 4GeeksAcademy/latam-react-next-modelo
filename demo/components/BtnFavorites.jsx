"use client";

import { useState } from "react";
import { useFavorites } from "@/context/FavoritesContext";

export default function BtnFavorites() {
  const [open, setOpen] = useState(false);
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex items-center rounded-md border border-blue-200 bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Favoritos
        <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-2 text-xs font-bold text-blue-700">
          {favorites.length}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-72 rounded-lg border border-slate-200 bg-white p-3 text-slate-800 shadow-xl">
          <h3 className="mb-2 text-sm font-bold text-slate-900">Lista de favoritos</h3>

          {favorites.length === 0 ? (
            <p className="text-sm text-slate-500">Aun no tienes favoritos.</p>
          ) : (
            <ul className="space-y-2">
              {favorites.map((favorite) => (
                <li
                  key={favorite.id}
                  className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-2 py-1.5"
                >
                  <span className="truncate text-sm font-medium">{favorite.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFavorite(favorite.id)}
                    aria-label={`Eliminar ${favorite.name} de favoritos`}
                    className="rounded p-1 text-red-600 transition hover:bg-red-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3a1 1 0 00-1 1v1H5a1 1 0 100 2h.293l.853 12.79A2 2 0 008.142 22h7.716a2 2 0 001.996-2.21L18.707 7H19a1 1 0 100-2h-3V4a1 1 0 00-1-1H9zm2 2h2v1h-2V5zm-1 5a1 1 0 012 0v7a1 1 0 11-2 0v-7zm4 0a1 1 0 112 0v7a1 1 0 11-2 0v-7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
