"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, FocusCards } from "@/components/ui/focus-cards";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  birth_date: string;
  gender: string,
  weight: string
  // otras propiedades...
}

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  pets: Pet[];
  role: string;
}

const UserProfile: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = Cookies.get("currentUser");
      if (currentUser) {
        const { token, user_id } = JSON.parse(currentUser);

        try {
          const response = await fetch(
            `http://petsocietyback-production.up.railway.app/auth/${user_id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
          }

          const data: UserData = await response.json();
          console.log("Datos del usuario:", data);
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
          router.push("/login"); // Redirigir si hay un error
        } finally {
          setLoading(false);
        }
      } else {
        router.push("/login"); // Redirigir si no hay usuario logueado
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!userData) {
    return <p>No se encontró información del usuario.</p>;
  }

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
          </h1>
          <h1 className="text-2xl font-bold mb-2">
            {userData.name}
          </h1>
          <h2 className="text-xl font-bold mb-4 mt-4">Información</h2>
          <p className="text-gray-500 mb-1">{userData.email}</p>
          <p className="text-gray-500 mb-1">{userData.role}</p>
          <p className="text-gray-500 mb-1">
            Fecha de creación: {userData.created_at}
          </p>

          <h2 className="text-xl font-bold mb-6 mt-8">Mascotas del Usuario</h2>

          {userData.pets && Array.isArray(userData.pets) && userData.pets.length > 0 ? (
            userData.pets.map((pet) => (
              <div key={pet.id} className="border p-4 mb-4 rounded-lg">
                <h3 className="text-lg font-bold">{pet.name}</h3>
                <p>Especie: {pet.species}</p>
                <p>Raza: {pet.breed}</p>
                <p>Fecha de nacimiento: {pet.birth_date}</p>
                <p>Género: {pet.gender}</p>
                <p>Peso: {pet.weight} kg</p>
              </div>
            ))
          ) : (
            <p>No tiene mascotas registradas.</p>
          )}

          <div className="mt-6">
            <button
              onClick={() => router.push('/register?step=2')}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Agregar Mascota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
