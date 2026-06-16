"use client"

import { useState } from "react"

export default function Counter () {
  //      estado    fxActualiza   = hook (valor inicial) 
  const [ contador, setContador ] = useState(0)

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1)
  }
  

  return (
    <div>
      <h1>Counter</h1>
      <h2>Contador es igual: {contador}</h2>
      <h2>el doble de Contador es: {contador * 2}</h2>
      <p>El cuadrado de Contador es: {contador ** 2}</p>


      <button 
        className="text-white bg-grey-100 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
        onClick={incrementar}
      >
        Incremantar de 1
      </button>

            <button 
        className="text-white bg-grey-100 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
        onClick={decrementar}
      >
        Decrementar de 1
      </button>

    </div>
  )
}