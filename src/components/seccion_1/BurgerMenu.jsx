import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('https://reservacion-citas.onrender.com/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' // Enviar cookies para logout
      });

      // Limpiar localStorage también
      localStorage.removeItem('token');
      
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
        className="burger-menu"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {open && (
        <div className="drawer-overlay" onClick={() => setOpen(false)}>
          <div className="drawer" onClick={e => e.stopPropagation()}>
            <button className="close-burger" onClick={() => setOpen(false)}>&times;</button>
            <nav className="burger-nav-links">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#conocenos" className="nav-link">Conócenos</a>
              <a href="#baristas" className="nav-link">Baristas</a>
              <a href="#menu" className="nav-link">Menús</a>
              <a href="#reseñas" className="nav-link">Reseñas</a>
              <a href="/tienda" className="nav-link">Tienda</a>
              <a href="#contacto" className="nav-link">Contacto</a>
              <Link to="/reservacion" className='reservation-btn' style={{ textDecoration: "none" }} >
                Reservacion <span>↗</span>
              </Link>
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