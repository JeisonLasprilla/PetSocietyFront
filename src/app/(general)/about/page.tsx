import { Metadata } from "next";
import Logo from "@/media/Logo.png";
import Image from "next/image";
export const metadata: Metadata = {
    title: "ICESI About us",
    description: "ICESI University",
  };

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center p-1 m-1">
                <Image src={Logo} alt="Home" width={126} height={126} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
                Sobre PetSociety
            </h1>
            
            <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
                    Nuestra Misión
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                    En PetSociety, nos dedicamos apasionadamente al cuidado y bienestar integral de las mascotas. Entendemos que cada animal es único y merece una atención personalizada y de calidad.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                        Nuestro Equipo
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Contamos con un equipo de veterinarios altamente calificados y personal dedicado, comprometidos con proporcionar el mejor cuidado posible para tu mascota.
                    </p>
                </div>

                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                        Servicios Integrales
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Ofrecemos una amplia gama de servicios veterinarios, desde chequeos preventivos hasta tratamientos especializados, todo en un ambiente cómodo y acogedor.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}