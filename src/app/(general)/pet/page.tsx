"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://petsocietyback-production.up.railway.app";

export default function AddPetPage() {
  const router = useRouter();
  const [petData, setPetData] = useState({
    name: "",
    species: "",
    breed: "",
    birth_date: "",
    gender: "",
    weight: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPetData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validar que todos los campos estén llenos
    const isAllFieldsFilled = Object.values(petData).every(value => value.trim() !== "");
  
    if (!isAllFieldsFilled) {
      alert("Por favor complete todos los campos");
      return;
    }
  
    try {
      // Obtener el usuario actual de las cookies
      const currentUser = Cookies.get("currentUser");
      if (!currentUser) {
        router.push("/auth/login");
        return;
      }
  
      const { token, user_id } = JSON.parse(currentUser);
  
      // Crear la mascota
      const petResponse = await axios.post(
        `${BASE_URL}/pets/register`,
        {
          ...petData,
          weight: parseFloat(petData.weight),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const createdPet = petResponse.data;
      console.log("Mascota creada:", createdPet);
  
      // Asociar la mascota al usuario
      await axios.patch(
        `${BASE_URL}/users/${user_id}/add-pet`,
        {
          petIds: [createdPet.id], // Usa el ID de la mascota creada
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Mascota asociada al usuario");
      alert("Mascota registrada y asociada exitosamente");
  
      // Redirigir al perfil de usuario
      router.push("/profile");
    } catch (error) {
      console.error("Error al registrar o asociar mascota:", error);
      alert("Error al registrar o asociar mascota. Inténtalo de nuevo.");
    }
  };  

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-8 md:my-16">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Registrar Nueva Mascota
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Ingresa los datos de tu mascota
      </p>

      <form className="my-8" onSubmit={onSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Nombre de la Mascota</Label>
          <Input
            id="name"
            placeholder="Nombre"
            type="text"
            value={petData.name}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="species">Especie</Label>
          <Input
            id="species"
            placeholder="Ejemplo: Perro, Gato"
            type="text"
            value={petData.species}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="breed">Raza</Label>
          <Input
            id="breed"
            placeholder="Raza de la mascota"
            type="text"
            value={petData.breed}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="birth_date">Fecha de Nacimiento</Label>
          <Input
            id="birth_date"
            type="date"
            value={petData.birth_date}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="gender">Género</Label>
          <Input
            id="gender"
            placeholder="Macho o Hembra"
            type="text"
            value={petData.gender}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="weight">Peso (kg)</Label>
          <Input
            id="weight"
            placeholder="Peso en kilogramos"
            type="number"
            step="0.1"
            value={petData.weight}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <div className="flex flex-row space-x-2">
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Registrar Mascota
          </button>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};