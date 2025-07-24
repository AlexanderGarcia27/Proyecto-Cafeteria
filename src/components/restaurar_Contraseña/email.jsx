import { useState } from 'react';
import '../css/restaurar_contraseña/email.css';

export const Email = () => {
    const [correo, setCorreo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="restaurar-bg">
            <img
                src="../src/assets/imagenes_1/logo.png"
                alt="Logo"
                className="restaurar-logo"
            />
            <h1 className="restaurar-titulo">
                Restaurar contraseña
            </h1>
            <p className="restaurar-descripcion">
                Ingresa la direccion de correo electronico asociada a tu cuenta y haz clic en “Restablecer contraseña”
            </p>
            <form
                onSubmit={handleSubmit}
                className="restaurar-form"
            >
                <label
                    htmlFor="correo"
                    className="restaurar-label"
                >
                    Correo electronico
                </label>
                <input
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                    required
                    className="restaurar-input"
                />
                <button
                    type="submit"
                    className="restaurar-boton"
                >
                    Restablecer contraseña
                </button>
            </form>
        </div>
    );
};