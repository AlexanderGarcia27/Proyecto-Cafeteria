import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/carrito-de-compras/carrito-de-compras.css";
import cafeImg from "../../assets/tienda-productos/bebidad-calientes/cafe.jpg";

const CarritoDeCompras = () => {
  const navigate = useNavigate();

  const irATienda = () => {
    navigate("/tienda");
  };

  return (
    <div className="carrito-bg">
      <button 
        className="carrito-ir-tienda" 
        onClick={irATienda}
      >
        Ir a tienda
      </button>
      <h2 className="carrito-titulo">Carrito de compras</h2>
      <div className="carrito-wrapper">
        <div className="carrito-contenido">
          <table className="carrito-tabla">
            <thead>
              <tr>
                <th className="carrito-th producto">Producto</th>
                <th className="carrito-th precio">Precio</th>
                <th className="carrito-th cantidad">Cantidad</th>
                <th className="carrito-th subtotal">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="carrito-producto-row">
                <td className="carrito-td producto">
                  <div className="carrito-producto-info">
                    <button className="carrito-eliminar">X</button>
                    <img
                      src={cafeImg}
                      alt="Cafe clasico"
                      className="carrito-producto-img"
                    />
                    <span className="carrito-producto-nombre">Cafe clasico</span>
                  </div>
                </td>
                <td className="carrito-td precio">$59.00</td>
                <td className="carrito-td cantidad">4</td>
                <td className="carrito-td subtotal">$236.00</td>
              </tr>
              
            </tbody>
          </table>
          <div className="carrito-totales">
            <div className="carrito-totales-box">
              <h3 className="carrito-totales-titulo">Totales del carrito</h3>
              <div className="carrito-totales-row">
                <span>Subtotal</span>
                <span>$236.00</span>
              </div>
              <div className="carrito-totales-row">
                <span>Envío</span>
                <span>$50.00</span>
              </div>
              <div className="carrito-totales-row total">
                <span>Total</span>
                <span>$286.00</span>
              </div>
              <button className="carrito-comprar">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoDeCompras;
