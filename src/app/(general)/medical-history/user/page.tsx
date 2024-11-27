"use client";

import { Download, Search } from "lucide-react";
import Brand from "../../../../components/brand-logo/Brand";
import { useAuth } from "@/app/context/AuthContext";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface MedicalRecord {
  record_id: string;
  diagnosis: string;
  treatment: string;
  medication: string;
  notes: string;
  created_at: string;
  updated_at: string;
  veterinarian: {
    name: string;
    email: string;
  } | null;
  pet: {
    name: string;
    species: string;
    breed: string;
  } | null;
  appointment: {
    appointment_date: string;
    reason: string;
    status: string;
  } | null;
}

const MedicalRecordsList = () => {
  const { token } = useAuth();
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMedicalRecords = async () => {
    try {
      const response = await fetch(
        "https://petsociety-production.up.railway.app/medical-records/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener los registros médicos");
      }

      const data = await response.json();
      setRecords(data);
    } catch (error) {
      console.error("Error obteniendo registros médicos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchMedicalRecords();
    }
  }, [token]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const downloadMedicalRecord = (record: MedicalRecord) => {
    const content = `HISTORIAL MÉDICO
================
ID: ${record.record_id}
Fecha de Creación: ${formatDate(record.created_at)}
Última Actualización: ${formatDate(record.updated_at)}

INFORMACIÓN MÉDICA
===============
Diagnóstico: ${record.diagnosis}
Tratamiento: ${record.treatment}
Medicación: ${record.medication}
Notas Adicionales: ${record.notes}

INFORMACIÓN DE LA CITA
==================
${record.appointment ? `Fecha de Cita: ${formatDate(record.appointment.appointment_date)}
Motivo: ${record.appointment.reason}
Estado: ${record.appointment.status}` : 'No hay información de cita disponible'}

INFORMACIÓN DE LA MASCOTA
=====================
${record.pet ? `Nombre: ${record.pet.name}
Especie: ${record.pet.species || 'No especificada'}
Raza: ${record.pet.breed || 'No especificada'}` : 'No hay información de mascota disponible'}

VETERINARIO
=========
${record.veterinarian ? `Nombre: ${record.veterinarian.name}
Email: ${record.veterinarian.email}` : 'No hay información del veterinario disponible'}`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `historial_medico_${record.record_id}.txt`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const filteredRecords = records.filter((record) => {
    if (!searchTerm) return true;
    
    const searchTermLower = searchTerm.toLowerCase();
    return (
      record.record_id.toLowerCase().includes(searchTermLower) ||
      (record.pet?.name || "").toLowerCase().includes(searchTermLower) ||
      (record.veterinarian?.name || "").toLowerCase().includes(searchTermLower)
    );
  });

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="min-h-screen bg-white p-4">
      <Brand />

      <div className="max-w-xl mx-auto mb-6 relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por ID, mascota o veterinario..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {records.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No tienes historias médicas registradas.</p>
        </div>
      ) : filteredRecords.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No se encontraron resultados para tu búsqueda.</p>
        </div>
      ) : (
        filteredRecords.map((record) => (
          <div
            key={record.record_id}
            className="max-w-xl mx-auto mb-4 p-4 border rounded-lg bg-white shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-black font-bold">
                  Historial Médico # {record.record_id}
                </h3>
                <p className="text-sm text-black">
                  Fecha: {formatDate(record.created_at)}
                </p>
                <p className="text-sm text-black">
                  Mascota: {record.pet?.name || 'No especificada'}
                </p>
                <p className="text-sm text-black">
                  Veterinario: {record.veterinarian?.name || 'No asignado'}
                </p>
                <p className="text-sm text-black">
                  Diagnóstico: {record.diagnosis}
                </p>
              </div>
              <button 
                onClick={() => downloadMedicalRecord(record)}
                className="p-2 text-black hover:bg-gray-100 rounded-full"
                title="Descargar historial médico"
              >
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MedicalRecordsList;
