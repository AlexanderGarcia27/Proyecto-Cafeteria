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
  imagen: cafeF
}, onClose }) => {
  const [show, setShow] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const aumentarCantidad = () => setCantidad(cantidad + 1);
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
        ...modalBgAnim
      }}>
        <div style={{
          background: "rgba(139, 99, 92, 0.8)",
          borderRadius: 10,
          padding: 40,
          minWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          ...(show ? modalAnim : { opacity: 0, transform: "scale(0.85)" })
        }}>
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
              cursor: "pointer"
            }}>×</button>
          )}
          <p style={{ color: "#fff", fontSize: 20, marginBottom: 30, textAlign: "center" }}>
            ¿Desea añadir el siguiente articulo a su carrito?
          </p>
          <div style={{
            background: "rgba(255, 255, 255, 0.97)",
            borderRadius: 8,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 32
          }}>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: 180, height: 180, objectFit: "cover", borderRadius: 4, marginBottom: 16 }} />
            <div style={{ color: "#222", fontSize: 20, marginBottom: 4, textAlign: "center" }}>{producto.nombre}</div>
            <div style={{ color: "#222", fontSize: 20, fontWeight: 500, textAlign: "center" }}>${producto.precio.toFixed(2)}</div>
          </div>
          <div style={{ display: "flex", gap: 32, width: "100%", justifyContent: "center" }}>
            {/* Selector de cantidad */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button onClick={disminuirCantidad} style={{
                background: "#B8742A",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                width: 36,
                height: 36,
                fontSize: 22,
                cursor: "pointer"
              }}>−</button>
              <span style={{ color: "#fff", fontSize: 20, minWidth: 32, textAlign: "center" }}>{cantidad}</span>
              <button onClick={aumentarCantidad} style={{
                background: "#B8742A",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                width: 36,
                height: 36,
                fontSize: 22,
                cursor: "pointer"
              }}>+</button>
            </div>
            {/* Botón añadir al carrito */}
            <button onClick={handleAddToCart} style={{
              background: "#B8742A",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontSize: 18,
              fontWeight: 600,
              cursor: "pointer"
            }}>
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
