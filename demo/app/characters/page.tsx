"use client"

import { useEffect, useState } from "react";
import { useFavorites } from "@/context/FavoritesContext";

type Character = {
	name: string;
	homeworld: string;
	url?: string;
};

export default function Characters() {
	const [ characters, setCharacters] = useState<Character[]>([])
	const { favorites, addFavorite, removeFavorite } = useFavorites();
	// Comentario

	const getCharacters = async () => {
		// fetch con Async / Away
		console.log('console log desde la fx getCharacters')
		const response = await fetch('https://swapi.info/api/people')
		console.log('datos obtenidos', response)
		if (!response.ok) {
			console.log('falso', response.status)
			// Trato el error adecuadamente 
			return
		}
		console.log('despues del if')
		const data = await response.json()
		console.log(data)
		setCharacters(data)
	}


	// hook useEffect() con dos parametros:
	// 1er parametro es un a funcion
	//    se ejecuta dependiendo del array de dependencias
	// 2do parametro es un array (dependencias)
	//    el array dterminina cuando se va ejecturar la función (del 1er parametro)

	// Si el array de dependencias está vacio, entonces la fx se ejecuta cuando se monta el componente
	useEffect(() => {
		console.log('console log desde el useEffect()')
		getCharacters()

	}, [])



	return (
		<main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
			<section className="mx-auto max-w-7xl">
				<h1 className="mb-8 text-3xl font-bold tracking-tight">Characters</h1>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-3 xl:grid-cols-5">
					
					{characters.map((item, index) => {
						const favoriteId = item.url ?? `${item.name}-${index}`;
						const image = `https://starwars.chocobar.net/img/characters/${index + 1}.jpg`;
						const isFavorite = favorites.some((favorite) => favorite.id === favoriteId);

						return (
						<article key={favoriteId} className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
							<img
								src={image}
								alt={item.name}
								className="h-[70%] w-full object-cover"
							/>
							<div className="p-5">
								<div className="flex items-start justify-between gap-3">
									<h1 className="text-xl font-semibold">{item.name}</h1>
									<button
										type="button"
										onClick={() =>
											isFavorite
												? removeFavorite(favoriteId)
												: addFavorite({
													id: favoriteId,
													name: item.name,
													homeworld: item.homeworld,
													image,
												})
										}
										aria-label={isFavorite ? `Quitar ${item.name} de favoritos` : `Agregar ${item.name} a favoritos`}
										className="rounded p-1 transition hover:bg-slate-700"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill={isFavorite ? "#ef4444" : "none"}
											stroke="#ef4444"
											strokeWidth="1.8"
											className="h-6 w-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M11.998 21S4.5 15.606 4.5 9.75a4.5 4.5 0 018.1-2.694L12 7.875l-.6-.819A4.5 4.5 0 0119.5 9.75C19.5 15.606 11.998 21 11.998 21z"
											/>
										</svg>
									</button>
								</div>
								<p className="text-xl font-semibold">Habitat {item.homeworld}</p>

							</div>
						</article>
						);
					})}

          {/* Card con info del personaje */}
{/* 
          <article className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
						<img
							src="https://starwars.chocobar.net/img/characters/1.jpg"
							alt="Luke"
							className="h-[70%] w-full object-cover"
						/>
						<div className="p-5">
							<h1 className="text-xl font-semibold">Luke</h1>
						</div>
					</article>
 */}


          {/* Fin de la galeria */}
        </div>
			</section>
		</main>
	);
}
