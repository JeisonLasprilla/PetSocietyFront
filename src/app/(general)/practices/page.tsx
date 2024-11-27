    import { Metadata } from "next";
    import Logo from "@/media/Logo.png";
    import Image from "next/image";
    
    export const metadata: Metadata = {
        title: "Nuestras Prácticas",
        description: "Prácticas y estándares de PetSociety",
    };

    export default function PracticesPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center p-1 m-1">
                    <Image src={Logo} alt="Home" width={126} height={126} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
                    Nuestras Prácticas
                </h1>
                
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
                    <div className="relative w-full h-[200px] mb-8">
                        <Image 
                            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070" 
                            alt="Veterinario trabajando"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
                        Excelencia en el Cuidado
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                        Mantenemos los más altos estándares de higiene y profesionalismo en todas nuestras instalaciones. Nuestro personal está en constante capacitación para ofrecer el mejor servicio.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-[150px] mb-4">
                            <Image 
                                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2068" 
                                alt="Limpieza"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                            Protocolos de Higiene
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Implementamos rigurosos protocolos de limpieza y desinfección en todas nuestras áreas de trabajo, garantizando un ambiente seguro para tu mascota.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-[150px] mb-4">
                            <Image 
                                src="https://images.unsplash.com/photo-1516900448138-898720b936c7?q=80&w=2070" 
                                alt="Capacitación"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                            Personal Capacitado
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Nuestro equipo participa en programas continuos de formación y actualización en las últimas técnicas veterinarias y protocolos de atención.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
    }