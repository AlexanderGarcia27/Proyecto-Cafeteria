import React, { useState } from 'react';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

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
              <a href="#menu" className="nav-link">Menús</a>
              <a href="#reseñas" className="nav-link">Reseñas</a>
              <a href="#contacto" className="nav-link">Contacto</a>
              <button className="reservation-btn" style={{marginTop: '2rem'}}>
                Reservation <span>↗</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}; 