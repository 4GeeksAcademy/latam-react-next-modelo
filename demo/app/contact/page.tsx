"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";


// Para manejar los estados de un formulario
// Opción 1 - un estado por input

// 1. Definimos un estado por cada input utilizanod useState
// 2. Definimos una función 'handle' para cambiar el estado ante el evenot onChange

// 3. En el input agregar la propiedad value={estado}
// 4. En el input agregar la propiedad onChange={apuntar a la función que cambia el estado}


// Otra forma de administrar formularios es el hook useRef()

// 1. 
// 2.
export default function Contact() {
  // 3. Código de JavaScript (si es necesario)
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')

  const navigate = useRouter()


  const handleName = (event: any) => {
    setName(event.target.value)
    console.log(event.target.value)
  }

  const handleEmail = (event: any) => {
    setEmail(event.target.value)
    console.log(event.target.value)
  }


  const handleSubmit = (event: any) => {
    // Hacer que no se compmorte como en HTML (no renderice toda la pagina nuevamente)
    event.preventDefault();
    const dataToSend = {
      nombre: name,
      correo: email
    }
    console.log(dataToSend)
    navigate.push('/about')
  }

  // 4. Retornar el JSX (un elemento HTML)
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Contáctanos
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="nombre" className="text-sm font-medium text-slate-700">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              value={name}
              onChange={handleName}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmail}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
              placeholder="exampe@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="asunto" className="text-sm font-medium text-slate-700">
              Asunto
            </label>
            <input
              id="asunto"
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
              placeholder="Motivo del mensaje"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="mensaje" className="text-sm font-medium text-slate-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              className="min-h-36 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
              placeholder="Escribe tu mensaje aquí"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}
