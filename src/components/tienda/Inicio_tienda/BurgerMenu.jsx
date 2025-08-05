import React, { useState } from 'react';
import { Link } from "react-router-dom"

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
              <a href="#productos" className="nav-link">Productos</a>
              <Link to="" className='reservation-btn' style={{ textDecoration: "none" }} >
                Ver carrito<span>↗</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}; 