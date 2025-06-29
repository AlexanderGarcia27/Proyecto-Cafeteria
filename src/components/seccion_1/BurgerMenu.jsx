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
              <a href="#" className="nav-link active">Home</a>
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Our Menu</a>
              <a href="#" className="nav-link">Reviews</a>
              <a href="#" className="nav-link">Contact</a>
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