"use client";

import { Download } from "lucide-react";
import Brand from "@/components/brand-logo/Brand";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

interface Appointment {
  appointment_id: string;
  appointment_date: string;
  reason: string;
  status: string;
  created_at: string;
  updated_at: string;
  veterinarian: {
    id: string;
    name: string;
    email: string;
    role: string;
    created_at: string;
    updated_at: string;
  } | null;
  pet: {
    name: string;
    species?: string;
    breed?: string;
    gender?: string;
  } | null;
}

const AppointmentsList = () => {
  const { token } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "https://petsociety-production.up.railway.app/appointments/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }

      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAppointments();
    }
  }, [token]);

  const filteredAppointments = appointments.filter((appointment) => {
    if (!searchTerm) return true;
    
    const searchTermLower = searchTerm.toLowerCase();
    const appointmentId = appointment.appointment_id || "";
    const petName = appointment.pet?.name || "";

    return (
      appointmentId.toLowerCase().includes(searchTermLower) ||
      petName.toLowerCase().includes(searchTermLower)
    );
  });

  const downloadAppointmentInfo = (appointment: Appointment) => {
    // Crear el contenido del archivo
    const content = `INFORMACIÓN DE LA CITA
===================
ID de Cita: ${appointment.appointment_id}
Fecha: ${formatDate(appointment.appointment_date)}
Motivo: ${appointment.reason}
Estado: ${appointment.status === 'scheduled' ? 'Programada' : appointment.status}
Fecha de Creación: ${formatDate(appointment.created_at)}
Última Actualización: ${formatDate(appointment.updated_at)}

INFORMACIÓN DE LA MASCOTA
=====================
${appointment.pet ? `Nombre: ${appointment.pet.name}
Especie: ${appointment.pet.species || 'No especificada'}
Raza: ${appointment.pet.breed || 'No especificada'}
Género: ${appointment.pet.gender || 'No especificado'}` : 'No hay información de mascota disponible'}

INFORMACIÓN DEL VETERINARIO
=======================
${appointment.veterinarian ? `Nombre: ${appointment.veterinarian.name}` : 'Veterinario no asignado'}`;

    // Crear el blob y el enlace de descarga
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cita_${appointment.appointment_id}.txt`;
    
    // Simular clic y limpiar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  // Función para formatear la fecha
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

  return (
    <div className="min-h-screen bg-white">
      <Brand />
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por mascota o número de cita..."
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredAppointments.map((appointment) => (
          <div
            key={appointment.appointment_id}
            className="mb-4 p-4 border rounded-lg bg-white shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-black font-bold">
                  Cita # {appointment.appointment_id}
                </h3>
                <p className="text-sm text-black">
                  Fecha: {formatDate(appointment.appointment_date)}
                </p>
                <p className="text-sm text-black">
                  Mascota: {appointment.pet?.name || 'No especificada'}
                </p>
                <p className="text-sm text-black">
                  Motivo: {appointment.reason}
                </p>
                <p className="text-sm text-black">
                  Estado: {appointment.status === 'scheduled' ? 'Programada' : appointment.status}
                </p>
                <p className="text-sm text-black">
                  Veterinario: {appointment.veterinarian?.name || 'No asignado'}
                </p>
              </div>
              <button 
                onClick={() => downloadAppointmentInfo(appointment)}
                className="p-2 bg-black text-white hover:bg-gray-800 rounded-full transition-colors"
                title="Descargar información de la cita"
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

export default AppointmentsList;
