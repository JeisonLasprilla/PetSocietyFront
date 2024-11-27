import { Metadata } from "next";
import { Instagram, Youtube, Twitter, Linkedin, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "PetSociety - Contáctanos",
    description: "Información de contacto y ubicaciones de PetSociety",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Contáctanos
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Teléfonos */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <h2 className="ml-3 text-xl font-semibold text-gray-900">Teléfonos</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>Bogotá: (601) 123-4567</li>
              <li>Medellín: (604) 234-5678</li>
              <li>Cali: (602) 345-6789</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Síguenos en</h2>
            <div className="space-y-4">
              <a href="https://instagram.com" className="flex items-center text-gray-600 hover:text-pink-600">
                <Instagram className="h-5 w-5 mr-2" />
                <span>@petsociety</span>
              </a>
              <a href="https://youtube.com" className="flex items-center text-gray-600 hover:text-red-600">
                <Youtube className="h-5 w-5 mr-2" />
                <span>PetSociety Oficial</span>
              </a>
              <a href="https://twitter.com" className="flex items-center text-gray-600 hover:text-blue-400">
                <Twitter className="h-5 w-5 mr-2" />
                <span>@PetSociety</span>
              </a>
              <a href="https://linkedin.com" className="flex items-center text-gray-600 hover:text-blue-700">
                <Linkedin className="h-5 w-5 mr-2" />
                <span>PetSociety Colombia</span>
              </a>
            </div>
          </div>

          {/* Ubicaciones */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <h2 className="ml-3 text-xl font-semibold text-gray-900">Ubicaciones</h2>
            </div>
            <div className="space-y-4">
              <a 
                href="https://maps.google.com/?q=Bogota+Colombia" 
                className="block text-gray-600 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bogotá: Calle 100 #15-23
              </a>
              <a 
                href="https://maps.google.com/?q=Medellin+Colombia" 
                className="block text-gray-600 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medellín: Carrera 43A #1-50
              </a>
              <a 
                href="https://maps.google.com/?q=Cali+Colombia" 
                className="block text-gray-600 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cali: Avenida 6N #28N-23
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}