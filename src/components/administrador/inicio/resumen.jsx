import React from "react";
import "./css/resumenDia.css";

export default function ResumenDia() {
    return (
        <div className="resumen-container">
            <h2 className="resumen-title">Resumen del Dia</h2>

            <div className="resumen-cards">
                
                <div className="resumen-card">
                    <h3>Ventas de Hoy</h3>
                    <p className="resumen-value">$2,500 MXN</p>
                </div>

                <div className="resumen-card">
                    <h3>Productos Vendidos</h3>
                    <p className="resumen-value">125</p>
                </div>

                <div className="resumen-card">
                    <h3>Productos con stock bajo</h3>
                    <p className="resumen-value">5</p>
                </div>

                <div className="resumen-card">
                    <h3>Nuevos Mensajes</h3>
                    <p className="resumen-value">4</p>
                </div>

            </div>
        </div>
    );
}
