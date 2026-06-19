"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type FavoriteItem = {
  id: string;
  name: string;
  homeworld: string;
  image: string;
};

type FavoritesContextType = {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      const exists = prev.some((favorite) => favorite.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((favorite) => favorite.id !== id));
  };

  const value = useMemo(
    () => ({ favorites, addFavorite, removeFavorite }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
}
