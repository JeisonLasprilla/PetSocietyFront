import Cookies from 'js-cookie'
import { AuthService } from "@/services/auth.service"

export const useLogin = () => {
    const login = async (email: string, password: string) => {
        try {
            const authService = new AuthService();
            const response = await authService.login(email, password);
            
            if (response) {
                const userData = {
                    email: response.email,
                    user_id: response.user_id,
                    token: response.token,
                    role: response.role,
                };
                Cookies.set('currentUser', JSON.stringify(userData));
                return userData;
            }
        } catch (error) {
            console.error('Error en useLogin:', error);
            throw error;
        }
    }

    return { login }
}