import { useState } from "react";
import logoCafe from "../../assets/imagenes_1/logo.png"; // Ajusta la ruta si es necesario
import "../css/restaurar_contraseña/email.css";

export const Email = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña.");
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
                <button type="submit" className="email-button">
                    Restablecer contraseña
                </button>
            </form>
        </div>
    );
};