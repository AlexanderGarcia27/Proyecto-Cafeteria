import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica de autenticación
        console.log('Email:', email, 'Password:', password);
        
        // Por ahora, simplemente redirigimos al home
        // TODO: Agregar validación real de credenciales
        navigate('/home');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Bienvenido</h1>
                <p className="login-subtitle">Inicie sesion en su cuenta</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Correo electronico</label>
                        <input
                            type="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            required
                        />
                    </div>

                    <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>

                    <button type="submit" className="login-button">
                        Iniciar sesion
                    </button>

                    <button type="button" className="google-button">
                        <img src="/src/assets/login/image.png" alt="Google logo" />
                        Sign up with Google
                    </button>

                    <p className="register-text">
                        ¿No tienes cuenta? <a href="#" className="register-link">Registrate aquí</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
