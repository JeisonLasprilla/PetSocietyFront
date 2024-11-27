import { useEffect, useState } from "react";
import Cookies from 'js-cookie'; 
import { User } from "@/interface/user";

export const useCurrentUser = () => {
    const [user, setCurrentUser] = useState<User|null>(null);

    const updateUser = () => {
        const userFromCookie = Cookies.get('currentUser');
        if (userFromCookie) {
            setCurrentUser(JSON.parse(userFromCookie));
        } else {
            setCurrentUser(null);
        }
    };

    useEffect(() => {
        updateUser();
        
        // Agregar un event listener para detectar cambios en las cookies
        window.addEventListener('storage', updateUser);
        
        return () => {
            window.removeEventListener('storage', updateUser);
        };
    }, []);
    
    return { user, updateUser };
}