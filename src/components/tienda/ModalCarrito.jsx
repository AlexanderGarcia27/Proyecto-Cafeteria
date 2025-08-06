import React, { useState, useEffect } from "react";
import cafeF from "../../assets/cafeF.jpg";
import MensajeConfirmacion from "./MensajeConfirmacion";

const modalBgAnim = {
  animation: "fadeInBg 0.3s ease"
};
const modalAnim = {
  animation: "zoomInModal 0.35s cubic-bezier(0.23, 1, 0.32, 1)"
};

const ModalCarrito = ({ producto = {
  nombre: "Cafe clasico",
  precio: 59.0,
  imagen: cafeF,
  descripcion: "Café clásico preparado con granos selectos, perfecto para comenzar tu día con energía y sabor auténtico."
}, onClose }) => {
  const [show, setShow] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const aumentarCantidad = () => {
    if (cantidad < 10) setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAddToCart = () => {
    // Aquí podrías agregar la lógica real de añadir al carrito
    setShowConfirm(true);
  };

  const handleVerCarrito = () => {
    setShowConfirm(false);
    if (onClose) onClose();
    // Aquí podrías navegar al carrito si lo deseas
  };

  return (
    <>
      <style>{`
        @keyframes fadeInBg {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomInModal {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .modal-container {
            padding: 20px !important;
            min-width: 90vw !important;
            max-width: 90vw !important;
            margin: 20px !important;
          }
          .modal-title {
            font-size: 18px !important;
            margin-bottom: 20px !important;
          }
          .product-card {
            padding: 16px !important;
            margin-bottom: 24px !important;
          }
          .product-image {
            width: 140px !important;
            height: 140px !important;
          }
          .product-name {
            font-size: 18px !important;
          }
          .product-price {
            font-size: 18px !important;
          }
          .product-description {
            font-size: 13px !important;
            margin-top: 8px !important;
          }
          .controls-container {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .quantity-controls {
            justify-content: center !important;
            align-items: center !important;
          }
          .add-button {
            width: 100% !important;
            max-width: 200px !important;
            align-self: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .modal-container {
            padding: 16px !important;
            min-width: 95vw !important;
            max-width: 95vw !important;
          }
          .modal-title {
            font-size: 16px !important;
            margin-bottom: 16px !important;
          }
          .product-card {
            padding: 12px !important;
            margin-bottom: 20px !important;
          }
          .product-image {
            width: 120px !important;
            height: 120px !important;
          }
          .product-name {
            font-size: 16px !important;
          }
          .product-price {
            font-size: 16px !important;
          }
          .product-description {
            font-size: 12px !important;
            margin-top: 6px !important;
          }
          .quantity-button {
            width: 32px !important;
            height: 32px !important;
            font-size: 18px !important;
          }
          .quantity-display {
            font-size: 18px !important;
            min-width: 28px !important;
          }
          .add-button {
            padding: 10px 20px !important;
            font-size: 16px !important;
            width: 100% !important;
            max-width: 180px !important;
            align-self: center !important;
          }
          .controls-container {
            align-items: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
        boxSizing: "border-box",
        ...modalBgAnim
      }}>
        <div 
          className="modal-container"
          style={{
            background: "rgba(139, 99, 92, 0.8)",
            borderRadius: 10,
            padding: 40,
            minWidth: 400,
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            ...(show ? modalAnim : { opacity: 0, transform: "scale(0.85)" })
          }}
        >
          {/* Botón de cerrar */}
          {onClose && (
            <button onClick={onClose} style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "transparent",
              border: "none",
              fontSize: 22,
              color: "#fff",
              cursor: "pointer",
              zIndex: 1
            }}>×</button>
          )}
          <p 
            className="modal-title"
            style={{ color: "#fff", fontSize: 20, marginBottom: 30, textAlign: "center" }}
          >
            ¿Desea añadir el siguiente articulo a su carrito?
          </p>
          <div 
            className="product-card"
            style={{
              background: "rgba(255, 255, 255, 0.97)",
              borderRadius: 8,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 32,
              width: "100%"
            }}
          >
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="product-image"
              style={{ width: 180, height: 180, objectFit: "cover", borderRadius: 4, marginBottom: 16 }} 
            />
            <div 
              className="product-name"
              style={{ color: "#222", fontSize: 20, marginBottom: 4, textAlign: "center" }}
            >
              {producto.nombre}
            </div>
            <div 
              className="product-price"
              style={{ color: "#222", fontSize: 20, fontWeight: 500, textAlign: "center", marginBottom: 12 }}
            >
              ${producto.precio.toFixed(2)}
            </div>
            <div 
              className="product-description"
              style={{ 
                color: "#666", 
                fontSize: 14, 
                textAlign: "center", 
                lineHeight: 1.4,
                maxWidth: "100%",
                padding: "0 8px"
              }}
            >
              {producto.descripcion}
            </div>
          </div>
          <div 
            className="controls-container"
            style={{ 
              display: "flex", 
              gap: 32, 
              width: "100%", 
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* Selector de cantidad */}
            <div 
              className="quantity-controls"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <button 
                onClick={disminuirCantidad} 
                className="quantity-button"
                style={{
                  background: "#B8742A",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  width: 36,
                  height: 36,
                  fontSize: 22,
                  cursor: "pointer"
                }}
              >
                −
              </button>
              <span 
                className="quantity-display"
                style={{ color: "#fff", fontSize: 20, minWidth: 32, textAlign: "center" }}
              >
                {cantidad}
              </span>
              <button 
                onClick={aumentarCantidad} 
                className="quantity-button"
                style={{
                  background: cantidad >= 10 ? "#ccc" : "#B8742A",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  width: 36,
                  height: 36,
                  fontSize: 22,
                  cursor: cantidad >= 10 ? "not-allowed" : "pointer"
                }}
                disabled={cantidad >= 10}
              >
                +
              </button>
            </div>
            {/* Botón añadir al carrito */}
            <button 
              onClick={handleAddToCart} 
              className="add-button"
              style={{
                background: "#B8742A",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 28px",
                fontSize: 18,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
        {showConfirm && (
          <MensajeConfirmacion onVerCarrito={handleVerCarrito} />
        )}
      </div>
    </>
  );
};

export default ModalCarrito;
