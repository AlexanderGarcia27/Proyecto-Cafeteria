import { useState } from "react";
import logoCafe from "../../assets/imagenes_1/logo.png"; // Ajusta la ruta si es necesario
import "../css/restaurar_contraseña/email.css";
import Swal from 'sweetalert2';

export const Email = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email) {
            Swal.fire({
                icon: 'error',
                iconColor: '#B78752',
                title: 'Error',
                text: 'Por favor ingresa tu correo electrónico',
                confirmButtonColor: '#B78752',
            });
            return;
        }

        setIsLoading(true);

        try {
            console.log('=== RESTAURANDO CONTRASEÑA ===');
            console.log('Email:', email);

            const response = await fetch('https://proyecto-cafeteria-lm3l.onrender.com/api/users/restore-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            console.log('Status de respuesta:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('Respuesta exitosa:', data);

                Swal.fire({
                    icon: 'success',
                    iconColor: '#B78752',
                    title: '¡Correo enviado!',
                    text: 'Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña.',
                    confirmButtonColor: '#B78752',
                });

                // Limpiar el campo de email
                setEmail("");
            } else {
                const errorData = await response.json();
                console.error('Error del servidor:', errorData);

                Swal.fire({
                    icon: 'error',
                    iconColor: '#B78752',
                    title: 'Error',
                    text: errorData.message || 'No se pudo enviar el correo. Inténtalo de nuevo.',
                    confirmButtonColor: '#B78752',
                });
            }
        } catch (error) {
            console.error('Error al restaurar contraseña:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error de conexión',
                text: 'No se pudo conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.',
                confirmButtonColor: '#B8742A',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="email-container">
            <div className="email-logo">
                <img src={logoCafe} alt="Logo cafetería" className="logo-img" />
            </div>
            <h2 className="email-title">Restaurar contraseña</h2>
            <p className="email-subtitle">
                Ingresa la dirección de correo electrónico asociada a tu cuenta y haz clic en “Restablecer contraseña”
            </p>
            <form onSubmit={handleSubmit} className="email-card">
                <label htmlFor="email" className="email-label">
                    Correo electrónico
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="email-input"
                    placeholder="ejemplo@email.com"
                />
                <button 
                    type="submit" 
                    className="email-button"
                    disabled={isLoading}
                    style={{
                        opacity: isLoading ? 0.7 : 1,
                        cursor: isLoading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isLoading ? 'Enviando...' : 'Restablecer contraseña'}
                </button>
            </form>
        </div>
    );
};