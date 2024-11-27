"use client";

import { useState } from "react";
import Brand from "../../../components/brand-logo/Brand";

const PetRegistration = () => {
  const [petData, setPetData] = useState({
    nombre: "",
    especie: "",
    raza: "",
    sexo: "",
    fechaNacimiento: "",
    altura: "",
    peso: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(petData); // Aquí puedes agregar la lógica de envío de datos
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center bg-white p-4">
        <Brand />
      </div>
      <div className="bg-white p-4">
        <form
          onSubmit={handleSubmit}
          className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto text-black"
        >
          <h2 className="text-xl font-bold mb-4">Registro de Mascota</h2>
          <div className="mb-4">
            <label className="block mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={petData.nombre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Especie</label>
            <input
              type="text"
              name="especie"
              placeholder="Especie"
              value={petData.especie}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Raza</label>
            <input
              type="text"
              name="raza"
              placeholder="Raza"
              value={petData.raza}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Sexo</label>
            <input
              type="text"
              name="sexo"
              placeholder="Sexo"
              value={petData.sexo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Fecha de Nacimiento</label>
            <input
              type="date"
              name="fechaNacimiento"
              placeholder="Fecha de Nacimiento"
              value={petData.fechaNacimiento}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Altura</label>
            <input
              type="text"
              name="altura"
              placeholder="Altura"
              value={petData.altura}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Peso (gr)</label>
            <input
              type="number"
              name="peso"
              placeholder="Peso (gr)"
              value={petData.peso}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-black"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PetRegistration;
