import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./css/resumenDia.css";

export default function ResumenDia() {
    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerCitas = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const res = await fetch("https://proyecto-cafeteria-lm3l.onrender.com/api/appointments", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            if (!res.ok) throw new Error("Error al cargar reservaciones");

            const data = await res.json();
            setCitas(data.data || []);

        } catch (err) {
            Swal.fire("Error", "No se pudieron obtener las reservaciones", "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerCitas();
    }, []);

    const citasActivas = citas.filter(c => c.status === "ACTIVE");
    const proximaCita = citasActivas.length > 0 ? citasActivas[0] : null;

    return (
        <div className="resumen-container">
            <h2 className="resumen-title">Reservaciones Registradas</h2>

            {loading ? (
                <p style={{ textAlign: "center" }}>Cargando información...</p>
            ) : (
                <div className="resumen-cards">

                    {/* 🔥 3 tarjetas arriba */}
                    <div className="resumen-card">
                        <h3>Total de Reservaciones</h3>
                        <p className="resumen-value">{citas.length}</p>
                    </div>

                    <div className="resumen-card">
                        <h3>Reservas Activas</h3>
                        <p className="resumen-value">{citasActivas.length}</p>
                    </div>

                    <div className="resumen-card">
                        <h3>Próxima Reserva</h3>
                        <p className="resumen-value">
                            {proximaCita
                                ? proximaCita.startTime.replace("T", " ").slice(0, 16)
                                : "Sin próximas reservas"}
                        </p>
                    </div>

                    {/* 🔥 Este baja solo a otra fila y es más grande */}
                    <div className="resumen-card mensaje-card">
                        <h3>Reserva proxima</h3>
                        <p className="resumen-value" style={{ fontSize: "13px", marginTop: "8px" }}>
                            {citas.length > 0 ? citas[citas.length - 1].message : "Sin mensajes"}
                        </p>
                    </div>

                </div>
            )}
        </div>
    );
}
