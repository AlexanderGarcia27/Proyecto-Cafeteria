import React, { useState } from "react";
import "./css/faq.css";

const preguntas = [
  {
    pregunta: "¿Cuál es el horario de atención?",
    respuesta: "Lunes a viernes de 8:00 a 20:00, sábados de 9:00 a 18:00. Domingos cerrado."
  },
  {
    pregunta: "¿Dónde están ubicados?",
    respuesta: "Calle Principal #123, Centro, Zacualtipán de Ángeles, Hidalgo, C.P. 43200, México."
  },
  {
    pregunta: "¿Puedo hacer reservaciones?",
    respuesta: "Sí, puedes hacer reservaciones usando el formulario de contacto o llamando al (774) 123 4567."
  },
  {
    pregunta: "¿Tienen opciones vegetarianas en el menú?",
    respuesta: "Sí, ofrecemos varias opciones vegetarianas como waffles con frutas, pan francés y chilaquiles sin carne."
  },
  {
    pregunta: "¿Aceptan pagos con tarjeta?",
    respuesta: "Sí, aceptamos pagos en efectivo y con tarjeta de crédito/débito."
  },
  {
    pregunta: "¿Tienen estacionamiento disponible?",
    respuesta: "Contamos con estacionamiento gratuito para nuestros clientes en la parte trasera del local."
  },
  {
    pregunta: "¿Puedo llevar mi laptop para trabajar?",
    respuesta: "¡Por supuesto! Tenemos un ambiente acogedor ideal para trabajar, con WiFi gratuito y enchufes disponibles."
  },
  {
    pregunta: "¿Organizan eventos especiales?",
    respuesta: "Sí, organizamos eventos como catas de café, talleres de latte art y celebraciones especiales. Contáctanos para más información."
  }
];

const FAQ = () => {
  const [abierta, setAbierta] = useState(null);

  const toggle = (idx) => {
    setAbierta(abierta === idx ? null : idx);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h3>Preguntas Frecuentes</h3>
        <div className="faq-list">
          {preguntas.map((item, idx) => (
            <div className="faq-item" key={idx}>
              <button 
                className={`faq-question ${abierta === idx ? 'active' : ''}`} 
                onClick={() => toggle(idx)}
              >
                {item.pregunta}
                <span className="faq-icon">{abierta === idx ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${abierta === idx ? 'open' : ''}`}>
                {item.respuesta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 