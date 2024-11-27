"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/app/context/AuthContext";
import { useLogin } from "@/hooks/auth/useLogin";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { setToken } = useAuth();
    const { login } = useLogin();
    const { updateUser } = useCurrentUser();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !password) {
            alert("Por favor complete todos los campos");
            return;
        }

        try {
            const userData = await login(email, password);
            if (userData) {
                setToken(userData.token);
                await updateUser();
                window.location.href = '/';
            }
        } catch (error) {
            setEmail("");
            setPassword("");
            alert("Credenciales inválidas");
            console.error("Error en login:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold mb-2">
                        Bienvenido a PetSociety
                    </h1>
                    <p className="text-gray-600">
                        Inicia sesión para continuar
                    </p>
                </div>
                
                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Iniciar sesión →
                    </button>
                </form>
            </div>
        </div>
    );
}