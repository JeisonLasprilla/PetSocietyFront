"use client";

import { useState } from "react";
import Brand from "../../../../components/brand-logo/Brand";

interface MedicalDataState {
  nombrePropietario: string;
  identificacionPropietario: string;
  nombreMascota: string;
  motivoConsulta: string;
  archivosAdjuntos: File | null;
  estado: string;
}

const MedicalHistory = () => {
  const [medicalData, setMedicalData] = useState<MedicalDataState>({
    nombrePropietario: "",
    identificacionPropietario: "",
    nombreMascota: "",
    motivoConsulta: "",
    archivosAdjuntos: null,
    estado: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMedicalData({ ...medicalData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setMedicalData({ ...medicalData, archivosAdjuntos: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(medicalData);
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
          <div className="mb-4">
            <label className="block mb-2">Nombre Propietario</label>
            <input
              type="text"
              name="nombrePropietario"
              placeholder="Valor"
              value={medicalData.nombrePropietario}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Identificación Propietario</label>
            <input
              type="text"
              name="identificacionPropietario"
              placeholder="Valor"
              value={medicalData.identificacionPropietario}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Nombre Mascota</label>
            <input
              type="text"
              name="nombreMascota"
              placeholder="Valor"
              value={medicalData.nombreMascota}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Motivo de la consulta</label>
            <input
              type="text"
              name="motivoConsulta"
              placeholder="Valor"
              value={medicalData.motivoConsulta}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Archivos adjuntos</label>
            <input
              type="file"
              name="archivosAdjuntos"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Estado</label>
            <input
              type="text"
              name="estado"
              placeholder="Valor"
              value={medicalData.estado}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default MedicalHistory;