import React, { useState } from 'react';
import {Link} from "react-router"

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
              <a href="#" className="nav-link">Inicio</a>
              <a href="#" className="nav-link">Conócenos</a>
              <a href="#" className="nav-link">Menús</a>
              <a href="#" className="nav-link">Reseñas</a>
              <a href="#" className="nav-link">Contacto</a>
              <Link to="/reservacion" className='reservation-btn' style={{ textDecoration: "none" }} >
                Reservacion <span>↗</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}; 