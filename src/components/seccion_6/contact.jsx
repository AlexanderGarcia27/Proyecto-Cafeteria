import { useState } from 'react';
import '../css/seccion_6/cssseccion_6.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {sendEmail} from "../../services/contactService";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message
    }

    const result = await sendEmail(data);
    console.log(result);
  }


  return (
    <div className="contact-section">
      <div className="overlay">
        <div className="contact-container">
          <h3>Saludar</h3>
          <h1>Contacto</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre aquí" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input-field">
                <label>Correo electrónico</label>
                <input type="email" placeholder="Escribe tu email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="input-field">
              <label>¿En qué podemos ayudarte?</label>
              <textarea placeholder="Inserta aquí tu duda" className="input-help" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>

        <div className="contact-footer">
          <div className="contact-info">
            <h4 id="h4-footer">¿Dónde encontrarnos?</h4>
            <p id="p-footer"><b>📍 Calle Principal #123,<br />
              Centro, Zacualtipán de Ángeles, Hidalgo<br />
              C.P. 43200, México</b>
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="contact-info">
            <h4 id="h4-footer">Contacto</h4>
            <p id="p-footer"><strong>Teléfono:</strong> (774) 123 4567<br />
              <strong>Email:</strong> cafeKlangZacuali@gmail.com
            </p>
          </div>
          <div className="contact-info">
            <h4 id="h4-footer">Horarios de Atención</h4>
            <div className="horarios">
              <div className="horario-row">
                <span className="horario-dia">Lunes - Viernes:</span>
                <span className="horario-linea"></span>
                <span className="horario-hora"> 8:00 - 20:00</span>
              </div>
              <div className="horario-row">
                <span className="horario-dia">Sábado:</span>
                <span className="horario-linea"></span>
                <span className="horario-hora"> 9:00 - 18:00</span>
              </div>
              <div className="horario-row">
                <span className="horario-dia">Domingo:</span>
                <span className="horario-linea"></span>
                <span className="horario-hora"> Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-note">
          <p>Copyright ©</p>
        </div>
      </div>
    </div>
  );
};