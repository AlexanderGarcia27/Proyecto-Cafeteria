import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar el token al cargar la aplicación
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
        setIsLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    };

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        const authenticated = !!token;
        setIsAuthenticated(authenticated);
        return authenticated;
    };

    return {
        isAuthenticated,
        isLoading,
        login,
        logout,
        checkAuth
    };
};
