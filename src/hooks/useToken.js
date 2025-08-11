import { useEffect, useState } from 'react';

export const useToken = () => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar token en localStorage y URL
  const checkToken = () => {
    console.log('=== VERIFICANDO TOKEN ===');
    
    // Primero verificar si hay token en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromURL = urlParams.get('token');
    
    if (tokenFromURL) {
      console.log('Token encontrado en URL, guardando...');
      try {
        localStorage.setItem('token', tokenFromURL);
        console.log('✅ Token guardado desde URL');
        
        // Limpiar URL
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
        
        setToken(tokenFromURL);
        setIsLoading(false);
        return tokenFromURL;
      } catch (error) {
        console.error('Error al guardar token desde URL:', error);
      }
    }
    
    // Verificar token en localStorage
    const tokenFromStorage = localStorage.getItem('token');
    console.log('Token en localStorage:', tokenFromStorage ? 'Encontrado' : 'No encontrado');
    
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
      setIsLoading(false);
      return tokenFromStorage;
    }
    
    setIsLoading(false);
    return null;
  };

  // Verificar si el token es válido
  const verifyToken = async (tokenToVerify) => {
    if (!tokenToVerify) return false;
    
    try {
      const response = await fetch('https://reservacion-citas.onrender.com/api/auth/verify', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${tokenToVerify}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      
      console.log('Verificación de token - Status:', response.status);
      return response.ok;
    } catch (error) {
      console.log('Error al verificar token:', error);
      return false;
    }
  };

  // Limpiar token
  const clearToken = () => {
    localStorage.removeItem('token');
    setToken(null);
    console.log('Token eliminado de localStorage');
  };

  // Efecto inicial para verificar token
  useEffect(() => {
    checkToken();
  }, []);

  return {
    token,
    isLoading,
    checkToken,
    verifyToken,
    clearToken,
    setToken
  };
};
