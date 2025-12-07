import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import './css/mensajes.css';

const CupFill = ({ className }) => (
	<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet" className={className} >
		<g transform="translate(0,50) scale(0.1,-0.1)" fill="rgba(255,255,255,0.95)" stroke="none">
			<path d="M176 492 c-2 -4 -1 -14 4 -22 6 -9 3 -24 -8 -42 -12 -21 -14 -34 -6-55 11 -33 29 -29 29 7 0 14 6 36 14 49 10 18 10 29 2 47 -11 24 -26 31 -35 16z" />
			<path d="M274 475 c4 -16 1 -34 -9 -48 -20 -29 -19 -50 4 -71 22 -20 40 -4 21 19 -9 11 -8 19 4 37 19 27 21 59 4 76 -20 20 -31 14 -24 -13z" />
			<path d="M365 471 c4 -20 1 -38 -10 -55 -16 -24 -16 -28 -1 -51 20 -30 39 -24 30 8 -3 13 2 35 10 51 11 22 12 34 4 52 -17 36 -41 32 -33 -5z" />
			<path d="M66 301 c-4 -5 -4 -16 -1 -23 3 -8 -4 -20 -19 -27 -27 -15 -46 -50-46 -87 0 -33 51 -84 84 -84 16 0 27 -7 31 -20 4 -12 16 -30 28 -40 18 -18 35-20 138-20 154 0 152-2 190 160 15 69 28 131 29 138 0 9 -49 12 -214 12 -118 0 -217 -4 -220 -9z m23 -127 c7 -30 10 -58 7 -61 -12 -12 -56 17 -62 42 -6 25 17 75 35 75 4 0 13 -25 20 -56z" />
		</g>
	</svg>
);

const CupHot1 = ({ className }) => (
	<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet" className={className} >
		<g transform="translate(0,50) scale(0.1,-0.1)" fill="rgba(255,255,255,0.95)" stroke="none">
			<path d="M215 467 c-5 -13 -16 -15 -55 -10 -43 5 -51 3 -74 -20 -29 -29 -34-72 -12-102 12-17 11-22 -10-42 -13-12-24-27-24-32 0-5 27-40 60-78 33-37 67-82 75-100 20-41 48-50 83-27 15 10 68 38 117 62 50 24 92 45 93 47 3 3 -203 270 -234 304 -11 13 -14 12 -19 -2z m-47 -36 c10 -6 5 -18 -20 -49 -37 -46 -52 -48 -56 -8 -6 47 39 81 76 57z" />
		</g>
	</svg>
);

export default function Mensajes() {
	const [mensajes, setMensajes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [abierto, setAbierto] = useState(null);

	const toggle = (idx) => {
		setAbierto(abierto === idx ? null : idx);
	};

	const obtenerMensajes = async () => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;

			const res = await fetch("https://proyecto-cafeteria-lm3l.onrender.com/api/messages", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				}
			});

			if (!res.ok) throw new Error("Error al cargar mensajes");

			const data = await res.json();

			// Formatear esos mensajes locos del backend 😅
			const mensajesFormateados = data.data.map(item => {
				const match = item.message.match(
					/nombre: (.*?), correo: (.*?), mensaje: (.*)$/
				);

				return {
					name: match ? match[1] : "Desconocido",
					email: match ? match[2] : "Sin correo",
					mensaje: match ? match[3] : item.message,
					fecha: item.createdAt ? item.createdAt.slice(0, 10) : "Sin fecha"
				};
			});

			setMensajes(mensajesFormateados);

		} catch (err) {
			Swal.fire("Error", "No se pudieron cargar los mensajes", "error");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		obtenerMensajes();
	}, []);

	return (
		<div className="mensajes-page" id="mensajes-section">
			<div className="overlay">
				<h1 className="title">Mensajes de clientes</h1>

				{loading ? (
					<p style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
						Cargando mensajes...
					</p>
				) : mensajes.length === 0 ? (
					<p style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
						No hay mensajes aún 📭
					</p>
				) : (
					<div className="messages-list">
						{mensajes.map((m, i) => (
							<div className="message-item" key={i}>
								<button
									className={`message-question ${abierto === i ? 'active' : ''}`}
									onClick={() => toggle(i)}
								>
									<div className="message-header">
										<div className="message-info">
											<div className="msg-name">{m.name}</div>
											<div className="msg-email">{m.email}</div>
										</div>
										<div className="message-icon-wrapper">
											{abierto === i ? (
												<CupHot1 className="rotar-taza" />
											) : (
												<CupFill />
											)}
										</div>
									</div>
								</button>

								<div className={`message-content ${abierto === i ? 'open' : ''}`}>
									<div className="message-body">
										<p className="message-text">{m.mensaje}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
