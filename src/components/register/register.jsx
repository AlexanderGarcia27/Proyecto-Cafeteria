import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/register/register.css';
import fondoCel from '../../assets/fondo_cel.jpg';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de registro
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        console.log('Email:', email, 'Password:', password);
        // Redirigir a login o home después de registrar
        navigate('/login');
    };

    return (
        <div className="login-container">
            <div className="login-flex">
                <div className="login-card">
                    <h1 className="login-title">Bienvenido</h1>
                    <p className="login-subtitle">Registra tu cuenta</p>
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
                        <div className="form-group">
                            <label className="form-label">Confirma contraseña</label>
                            <input
                                type="password"
                                className="form-input"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Registrarse
                        </button>
                        <p className="register-text">
                            ¿Ya tienes una cuenta?{' '}
                            <a href="#" className="register-link" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                                Inicia sesion aqui
                            </a>
                        </p>
                    </form>
                </div>
                <div className="login-image-container">
                    <img src={fondoCel} alt="Fondo registro" className="login-side-image" />
                </div>
            </div>
        </div>
    );
};

export default Register;
