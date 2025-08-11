import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/login/login.css';
import fondoCel from '../../assets/fondo_cel.jpg';
import googleLogo from '../../assets/login/image.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Verificar si hay token en la URL (después de login con Google)
    useEffect(() => {
        console.log('=== VERIFICANDO TOKEN EN URL ===');
        console.log('URL completa:', window.location.href);
        console.log('Search params:', location.search);
        
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get('token');
        
        console.log('Token encontrado en URL:', token ? 'SÍ' : 'NO');
        
        if (token) {
            console.log('Token encontrado en URL después de login con Google:', token);
            console.log('Longitud del token:', token.length);
            
            // Verificar que el token no esté vacío
            if (token.trim() === '') {
                console.error('Token está vacío');
                return;
            }
            
            try {
                // Guardar token en localStorage
                localStorage.setItem('token', token);
                console.log('✅ Token guardado exitosamente en localStorage');
                
                // Verificar que se guardó correctamente
                const tokenGuardado = localStorage.getItem('token');
                console.log('Token verificado en localStorage:', tokenGuardado ? 'SÍ' : 'NO');
                console.log('Longitud del token guardado:', tokenGuardado ? tokenGuardado.length : 0);
                
                // Limpiar la URL
                const cleanUrl = window.location.pathname;
                window.history.replaceState({}, document.title, cleanUrl);
                console.log('URL limpiada:', cleanUrl);
                
                // Mostrar mensaje de éxito
                Swal.fire({
                    icon: 'success',
                    iconColor: '#ffffff',
                    title: '¡Bienvenido!',
                    text: 'Inicio de sesión con Google exitoso.',
                    confirmButtonColor: '#004aad',
                    timer: 1500,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'mi-alerta-personalizada'
                    }
                });
                
                // Redirigir a home después de un breve delay
                setTimeout(() => {
                    console.log('Redirigiendo a /home...');
                    navigate('/home');
                }, 1600);
                
            } catch (error) {
                console.error('Error al guardar token en localStorage:', error);
                showError('Error al guardar la sesión. Intente nuevamente.');
            }
        } else {
            console.log('No hay token en la URL');
        }
    }, [location, navigate]);

    const showError = (message) => {
        Swal.fire({
            icon: 'error',
            iconColor: '#ffffff',
            title: 'Lo siento',
            text: message,
            customClass: {
                popup: 'mi-alerta-personalizada'
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('https://reservacion-citas.onrender.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errData = await response.json();
                showError(errData.message || 'Credenciales inválidas');
                setIsSubmitting(false);
                return;
            }

            const data = await response.json();
            console.log('Login exitoso:', data);
            console.log('Headers de respuesta del login:', response.headers);
            console.log('Cookies después del login:', document.cookie);

            // Guardar token en localStorage si el backend lo envía
            if (data.token) {
                localStorage.setItem('token', data.token);
                console.log('Token guardado en localStorage:', data.token);
            } else {
                console.warn('El backend no envió el token en la respuesta JSON');
            }

            Swal.fire({
                icon: 'success',
                iconColor: '#ffffff',
                title: '¡Bienvenido!',
                text: 'Inicio de sesión exitoso.',
                confirmButtonColor: '#004aad',
                timer: 1500,
                showConfirmButton: false,
                customClass: {
                    popup: 'mi-alerta-personalizada'
                }
            });

            setTimeout(() => {
                navigate('/home');
            }, 1600);

        } catch (error) {
            console.error('Error en el login:', error);
            showError('Error del servidor. Intente más tarde.');
            setIsSubmitting(false);
        }
    };

    // ✅ Redirección a Google OAuth
    const redirectToGoogle = () => {
        window.location.replace("https://reservacion-citas.onrender.com/api/oauth2/authorization/google");
    };

    return (
        <div className="login-container">
            <div className="login-flex">
                <div className="login-card">
                    <h1 className="login-title">Bienvenido</h1>
                    <p className="login-subtitle">Inicie sesión en su cuenta</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                        <a
                            href="#"
                            className="forgot-password"
                            onClick={(e) => {
                                e.preventDefault();
                                if (!isSubmitting) {
                                    navigate('/restaurar-contraseña');
                                }
                            }}
                            style={{ 
                                opacity: isSubmitting ? 0.5 : 1,
                                pointerEvents: isSubmitting ? 'none' : 'auto',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                            }}
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                        <button 
                            type="submit" 
                            className={`login-button ${isSubmitting ? 'sending' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
                        </button>

                        {/* ✅ Botón Google con funcionalidad */}
                        <button
                            type="button"
                            className="google-button"
                            onClick={redirectToGoogle}
                            disabled={isSubmitting}
                        >
                            <img src={googleLogo} alt="Google logo" />
                            Sign up with Google
                        </button>

                        <p className="register-text">
                            ¿No tienes cuenta?{' '}
                            <a
                                href="#"
                                className="register-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (!isSubmitting) {
                                        navigate('/register');
                                    }
                                }}
                                style={{ 
                                    opacity: isSubmitting ? 0.5 : 1,
                                    pointerEvents: isSubmitting ? 'none' : 'auto',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Regístrate aquí
                            </a>
                        </p>
                    </form>
                </div>
                <div className="login-image-container">
                    <img src={fondoCel} alt="Fondo login" className="login-side-image" />
                </div>
            </div>
        </div>
    );
};

export default Login;