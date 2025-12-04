import React, { useState } from 'react';
import { Link } from "react-router-dom"

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

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
              <Link to="" className="tienda-nav-link">Mensajes</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}; 