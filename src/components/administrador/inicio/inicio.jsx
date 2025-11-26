import React, { useState } from 'react'
import "./css/inicio.css";
import { NavbarInicio } from './navbarInicio'

export default function Inicio() {

    return (
        <div className="productos-container">
            <div className="admin-productos-layout">

                {/* Texto sobre el fondo */}
                <div className="admin-welcome-text">
                    <h1>Bienvenido Administrador,</h1>
                    <p>Aquí tienes el resumen de hoy</p>
                </div>

                <NavbarInicio />
            </div>
        </div>
    );
}
