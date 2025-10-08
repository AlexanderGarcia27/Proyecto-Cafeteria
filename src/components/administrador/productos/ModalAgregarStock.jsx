import React, { useState } from 'react';
import './css/productos.css';

const ModalAgregarStock = ({ producto, onClose }) => {
  const [cantidad, setCantidad] = useState(1);
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregarStock = () => {
    // Aquí puedes agregar la lógica para actualizar el stock
    console.log(`Agregando ${cantidad} unidades al producto:`, producto);
    
    // Mostrar notificación personalizada
    setMostrarNotificacion(true);
    
    // Cerrar modal después de 2 segundos
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Notificación personalizada */}
      {mostrarNotificacion && (
        <div className="notificacion-overlay">
          <div className="notificacion-container">
            <div className="notificacion-mensaje">
              Stock agregado correctamente
            </div>
          </div>
        </div>
      )}
      
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-container">
          <div className="modal-header">
            <h2>Añadir stock al producto</h2>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>
          
          <div className="modal-content">
            <div className="producto-info-card">
              <div className="producto-imagen-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="producto-imagen-modal"
                />
              </div>
              <div className="producto-details">
                <p><strong>Nombre:</strong> {producto.nombre}</p>
                <p><strong>Precio:</strong> ${producto.precio}</p>
                <p><strong>Stock Actual:</strong> {producto.stock}</p>
              </div>
            </div>
            
            <div className="stock-controls">
              <button 
                className="btn-decrement" 
                onClick={decrementarCantidad}
                disabled={cantidad <= 1}
              >
                -
              </button>
              <span className="cantidad-display">{cantidad}</span>
              <button 
                className="btn-increment" 
                onClick={incrementarCantidad}
              >
                +
              </button>
              <button 
                className="btn-agregar-stock" 
                onClick={handleAgregarStock}
              >
                Añadir stock
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAgregarStock;
