import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/register/register.css';
import fondoCel from '../../assets/fondo_cel.jpg';
import { registerUser } from '../../services/userService';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- Estado para bloquear inputs y botón
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // evitar doble submit

    if (!name.trim()) {
      Swal.fire({
        icon: 'error',
        iconColor: '#ffffff',
        title: 'Nombre requerido',
        text: 'El nombre es obligatorio',
        customClass: {
          popup: 'mi-alerta-personalizada'
        }
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        iconColor: '#ffffff',
        title: 'Error de contraseña',
        text: 'Las contraseñas no coinciden',
        customClass: {
          popup: 'mi-alerta-personalizada'
        }
      });
      return;
    }

    setIsSubmitting(true); // bloquear mientras se procesa

    const result = await registerUser(name, email, password);

    if (result.error) {
      Swal.fire({
        icon: 'error',
        iconColor: '#ffffff',
        title: 'Error de registro',
        text: result.error,
        customClass: {
          popup: 'mi-alerta-personalizada'
        }
      });
      setIsSubmitting(false); // desbloquear si hay error
    } else {
      Swal.fire({
        icon: 'success',
        iconColor: '#ffffff',
        title: '¡Registro exitoso!',
        text: 'Ahora puedes iniciar sesión.',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'mi-alerta-personalizada'
        }
      });

      setTimeout(() => navigate('/'), 2000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-flex">
        <div className="login-card">
          <h1 className="login-title">Bienvenido</h1>
          <p className="login-subtitle">Registra tu cuenta</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting} // Deshabilitar input si está enviando
              />
            </div>
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirmar contraseña</label>
              <input
                type="password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={isSubmitting} // Deshabilitar botón si está enviando
            >
              {isSubmitting ? 'Registrando...' : 'Registrarse'}
            </button>
            <p className="register-text">
              ¿Ya tienes una cuenta?{' '}
              <a
                href="#"
                className="register-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                Inicia sesión aquí
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
