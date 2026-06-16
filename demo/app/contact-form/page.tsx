"use client";

import React, { useState } from "react";

type ContactForm = {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
};

const initialForm: ContactForm = {
  nombre: "",
  email: "",
  asunto: "",
  mensaje: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario enviado:", formData);
    setFormData(initialForm);
  };

  return (
    <div>
      <h1>Contáctanos</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="asunto">Asunto</label>
          <input
            id="asunto"
            name="asunto"
            type="text"
            value={formData.asunto}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
