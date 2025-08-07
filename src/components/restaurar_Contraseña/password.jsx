import React, { useState } from "react";
import "../css/restaurar_contraseña/password.css";


export const Password = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");
      if (!password || !confirmPassword) {
        setError("Por favor, completa ambos campos.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      }
      // Aquí iría la lógica para cambiar la contraseña
      setSuccess("¡Contraseña cambiada exitosamente!");
      setPassword("");
      setConfirmPassword("");
    };
  
    return (
      <div className="password-container">
        <div className="password-card">
          <h2 className="password-title">Bienvenido</h2>
          <p className="password-subtitle">Restablecer contraseña</p>
          <form onSubmit={handleSubmit} className="password-form">
            <label className="password-label" htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <label className="password-label" htmlFor="confirmPassword">Confirma contraseña</label>
            <input
              id="confirmPassword"
              type="password"
              className="password-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
            {error && <div className="password-error">{error}</div>}
            {success && <div className="password-success">{success}</div>}
            <button type="submit" className="password-button">Cambiar contraseña</button>
          </form>
        </div>
      </div>
    );
  };

