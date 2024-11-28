import axios, { AxiosInstance } from 'axios';

export class AuthService {
    protected readonly axios: AxiosInstance;

    public constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3000',
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000
        });
    }

    public async login(email: string, password: string): Promise<any> {
        try {
            const response = await this.axios.post('/auth/login', { email, password });
            return response.data;
        } catch (error) {
            console.error('Error en login:', error);
            throw new Error('Credenciales inválidas');
        }
    }
}
