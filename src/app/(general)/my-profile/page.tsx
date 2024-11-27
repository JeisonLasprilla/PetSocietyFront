"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, FocusCards } from "@/components/ui/focus-cards"; // Asegúrate de que la ruta sea correcta

interface UserInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
}

interface Pet {
  title: string;
  src: string;
}

const UserProfile: React.FC = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: "xxxxxxxxxxxxxxxxx",
    name: "Usuario xxxxxxxxxxxxxxxx",
    email: "xxxxxx@gmail.com",
    phone: "+57 xxx xxx xx",
    registrationDate: "xx/xx/xxxx",
  });

  // Ejemplo de mascotas - reemplaza estas URLs con las reales de tus mascotas
  const pets: Pet[] = [
    {
      title: "Bruno",
      src: "/pets/bruno.jpg", // Asegúrate de tener estas imágenes en tu carpeta public
    },
    {
      title: "Manchas",
      src: "/pets/manchas.jpg",
    },
    {
      title: "Luna",
      src: "/pets/luna.jpg",
    },
  ];

  const handleModify = () => {
    router.push("my-profile/modify/");
  };

  const handleAddPet = () => {
    router.push("/pet/");
  };

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <Image
            src="/user-avatar.jpg"
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{userInfo.name}</h1>
          <h2 className="text-xl font-bold mb-4 mt-4">Información</h2>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-gray-500 mb-1">{userInfo.email}</p>
          <p className="text-gray-500 mb-1">{userInfo.phone}</p>
          <p className="text-gray-500 mb-1">
            Fecha de registro: {userInfo.registrationDate}
          </p>
          <p className="text-gray-500 mb-1">ID: {userInfo.id}</p>

          <button
            onClick={handleModify}
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors mt-2"
          >
            Modificar
          </button>

          <h2 className="text-xl font-bold mb-6 mt-8">Mis Mascotas</h2>
          
          {/* Focus Cards para las mascotas */}
          <div className="w-full">
            <FocusCards cards={pets} />
          </div>

          <button
            onClick={handleAddPet}
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors mt-8"
          >
            Añadir Mascota
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;