import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const BurgerMenu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogout = async () => {
    try {
      const response = await fetch('https://proyecto-cafeteria-lm3l.onrender.com/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' // Enviar cookies para logout
      });

      // Limpiar localStorage también
      localStorage.clear();
      //localStorage.removeItem('token');

      // Mostrar mensaje de confirmación
      Swal.fire({
        icon: 'success',
        iconColor: '#B78752',
        title: 'Sesión cerrada',
        text: 'Has cerrado sesión exitosamente.',
        confirmButtonColor: '#B78752',
        timer: 1500,
        showConfirmButton: false
      });

      // Redirigir al login
      setTimeout(() => {
        navigate('/');
      }, 1600);

    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Redirigir de todas formas
      navigate('/');
    }
  };

  return (
    <>
      <button
        className="tienda-burger-menu"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {open && (
        <div className="tienda-drawer-overlay" onClick={() => setOpen(false)}>
          <div className="tienda-drawer" onClick={e => e.stopPropagation()}>
            <button className="tienda-close-burger" onClick={() => setOpen(false)}>&times;</button>
            <nav className="tienda-burger-nav-links">
              <Link to="/administrador-productos" className="tienda-nav-link">Productos</Link>
              <button
                onClick={handleLogout}
                className="reservation-btn"
              >
                Cerrar sesión
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}; 