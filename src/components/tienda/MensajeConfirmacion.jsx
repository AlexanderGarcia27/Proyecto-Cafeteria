import React from "react";
import { useNavigate } from "react-router-dom";

const MensajeConfirmacion = ({ onVerCarrito }) => {
  const navigate = useNavigate();

  const irACarrito = () => {
    console.log('Navegando al carrito...');
    navigate("/carritodecompras");
  };
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .confirm-container {
            padding: 24px 20px 20px 20px !important;
            min-width: 85vw !important;
            max-width: 85vw !important;
          }
          .confirm-title {
            font-size: 24px !important;
            margin-bottom: 20px !important;
          }
          .confirm-button {
            padding: 12px 24px !important;
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .confirm-container {
            padding: 20px 16px 16px 16px !important;
            min-width: 90vw !important;
            max-width: 90vw !important;
          }
          .confirm-title {
            font-size: 20px !important;
            margin-bottom: 16px !important;
          }
          .confirm-button {
            padding: 10px 20px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(139, 99, 92, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
        padding: "20px",
        boxSizing: "border-box"
      }}>
        <div 
          className="confirm-container"
          style={{
            background: "#bb905e",
            borderRadius: 16,
            padding: "32px 24px 24px 24px",
            minWidth: 350,
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
          }}
        >
          <div 
            className="confirm-title"
            style={{
              color: "#fff",
              fontSize: 28,
              textAlign: "center",
              marginBottom: 24,
              fontWeight: 400
            }}
          >
            Producto agregado correctamente
          </div>
          <button
            onClick={() => {
              console.log('Botón Ver Carrito clickeado');
              irACarrito();
            }}
            className="confirm-button"
            style={{
              background: "#fff",
              color: "#222",
              border: "none",
              borderRadius: 10,
              padding: "10px 28px",
              fontSize: 18,
              fontWeight: 500,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}
          >
            Ver Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default MensajeConfirmacion;
