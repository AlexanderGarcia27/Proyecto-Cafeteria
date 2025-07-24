import { useState } from 'react';
import '../css/restaurar_contraseña/password.css';

export const Password = () => {
    const [password, setPassword] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        };

    return (
        <div className="password-bg">
            <form className="password-form" onSubmit={handleSubmit}>
                <h1 className="password-titulo">Bienvenido</h1>
                <p className="password-subtitulo">Restablecer contraseña</p>
                <label className="password-label" htmlFor="password">
                    Contraseña
                </label>
                <input
                    className="password-input"
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <label className="password-label" htmlFor="confirmar">
                    Confirma contraseña
                </label>
                <input
                    className="password-input"
                    id="confirmar"
                    type="password"
                    value={confirmar}
                    onChange={e => setConfirmar(e.target.value)}
                    required
                />
                <button className="password-boton" type="submit">
                    Cambiar contraseña
                </button>
            </form>
        </div>
    );
};
