    import { Metadata } from "next";
    import Logo from "@/media/Logo.png";
    import Image from "next/image";
    export const metadata: Metadata = {
        title: "Políticas de Privacidad",
        description: "Políticas de privacidad de PetSociety",
    };

    export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center p-1 m-1">
                    <Image src={Logo} alt="Home" width={126} height={126} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
                    Políticas de Privacidad
                </h1>
                
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
                        Compromiso con tu Privacidad
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                        En PetSociety, nos tomamos muy en serio la protección de tus datos personales y los de tus mascotas. Nos comprometemos a mantener la confidencialidad y seguridad de toda la información que nos proporcionas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                            Uso de la Información
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Los datos recopilados serán utilizados exclusivamente para brindar servicios veterinarios, dar seguimiento a tratamientos y mantener un historial médico actualizado de tu mascota. No compartimos información con terceros bajo ninguna circunstancia.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                            Protección de Datos
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra accesos no autorizados, modificación o divulgación. Todo nuestro personal está comprometido con acuerdos de confidencialidad.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                            Derechos del Usuario
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Tienes derecho a acceder, rectificar o eliminar tus datos personales en cualquier momento. También puedes solicitar información sobre cómo se están utilizando tus datos contactando directamente con nuestro equipo.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                            Consentimiento
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Al proporcionarnos tus datos, aceptas estas políticas de privacidad. Te informaremos sobre cualquier cambio en nuestras políticas y solicitaremos tu consentimiento cuando sea necesario para nuevos usos de tu información.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
    }