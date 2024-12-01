"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface Comment {
    id: string;
    user: {
        id: string;
        name: string;
    };
    content: string;
    created_at: string;
}

const BASE_URL = "https://petsocietyback-production.up.railway.app";

export default function OpinionesPage() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/comments`);
            setComments(response.data);
        } catch (error) {
            console.error("Error al obtener los comentarios:", error);
            alert("Error al cargar las opiniones.");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newComment.trim() === "") {
            alert("Por favor, escribe un comentario.");
            return;
        }

        try {
            const currentUser = Cookies.get("currentUser");
            if (!currentUser) {
                router.push("/auth/login");
                return;
            }

            const { token } = JSON.parse(currentUser);

            await axios.post(
                `${BASE_URL}/comments`,
                { content: newComment },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                }
            );

            setNewComment("");
            fetchComments();
            alert("Comentario agregado exitosamente.");
        } catch (error) {
            console.error("Error al agregar el comentario:", error);
            alert("Error al agregar el comentario. Inténtalo de nuevo.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Opiniones</h1>

            <form onSubmit={handleSubmit} className="mb-6">
                <textarea
                    className="w-full p-2 border rounded"
                    placeholder="Escribe tu comentario aquí..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                ></textarea>
                <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Enviar
                </button>
            </form>

            <div>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="mb-4 p-4 border rounded">
                            <p className="text-gray-700">{comment.content}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                - {comment.user.name} el {new Date(comment.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No hay comentarios aún.</p>
                )}
            </div>
        </div>
    );
}