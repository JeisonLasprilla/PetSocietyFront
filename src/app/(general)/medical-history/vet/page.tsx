"use client";

import { Download } from "lucide-react";
import Brand from "../../../../components/brand-logo/Brand";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useState, useEffect } from "react";

interface Veterinarian {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}

interface Pet {
  id?: string;
  name?: string;
  species?: string;
  breed?: string;
}

interface Appointment {
  appointment_id: string;
  appointment_date: string;
  reason: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface MedicalRecord {
  record_id: string;
  diagnosis: string;
  treatment: string;
  medication: string;
  notes: string;
  created_at: string;
  updated_at: string;
  veterinarian: Veterinarian | null;
  pet: Pet | null;
  appointment: Appointment | null;
}

const MedicalRecordsList = () => {
  const router = useRouter();
  const { token } = useAuth();
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMedicalRecords = async () => {
    try {
      const response = await fetch(
        "https://petsociety-production.up.railway.app/medical-records/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch medical records");
      }

      const data = await response.json();
      setRecords(data);
    } catch (error) {
      console.error("Error fetching medical records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchMedicalRecords();
    }
  }, [token]);

  const handleNewRecord = () => {
    router.push("/medical-history/register");
  };

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
${record.appointment ? `ID de Cita: ${record.appointment.appointment_id}
Fecha de Cita: ${formatDate(record.appointment.appointment_date)}
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
Email: ${record.veterinarian.email}
ID: ${record.veterinarian.id}` : 'No hay información del veterinario disponible'}`;

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
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Brand />
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por mascota, veterinario o número de historia..."
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button
          onClick={handleNewRecord}
          className="w-3/12 ml-8 mb-6 bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Nuevo Historial Médico
        </button>

        {filteredRecords.map((record) => (
          <div
            key={record.record_id}
            className="mb-4 p-4 border rounded-lg bg-white shadow-sm"
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
                {record.appointment && (
                  <p className="text-sm text-black">
                    Fecha de Cita: {formatDate(record.appointment.appointment_date)}
                  </p>
                )}
              </div>
              <button 
                onClick={() => downloadMedicalRecord(record)}
                className="p-2 bg-black text-white hover:bg-gray-800 rounded-full transition-colors"
                title="Descargar historial médico"
              >
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecordsList;
