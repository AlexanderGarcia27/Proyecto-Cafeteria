import { useState } from 'react';
import '../css/seccion_6/cssseccion_6.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {sendEmail} from "../../services/contactService";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Función para obtener el año actual
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const validateEmail = (email) => {
    // Validación básica de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Limpiar errores previos
    setErrorName("");
    setErrorEmail("");
    setErrorMessage("");
    setSuccessMsg("");

    let valid = true;
    if (!name.trim()) {
      setErrorName("Por favor, ingresa tu nombre.");
      valid = false;
    }
    if (!email.trim()) {
      setErrorEmail("Por favor, ingresa tu correo electrónico.");
      valid = false;
    } else if (!validateEmail(email)) {
      setErrorEmail("Por favor, ingresa un correo válido.");
      valid = false;
    }
    if (!message.trim()) {
      setErrorMessage("Por favor, escribe tu mensaje.");
      valid = false;
    }
    if (!valid) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    // Codificar el email en base64
    const encodedEmail = btoa(email);
    const data = { name, email: encodedEmail, message };
    try {
      const result = await sendEmail(data);
      if (result && result.message && !result.message.toLowerCase().includes("error")) {
        setSuccessMsg("¡Mensaje enviado correctamente!");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setSuccessMsg("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        setTimeout(() => {
          window.location.reload();
        }, 5000); // Espera 5 segundos antes de recargar
      }
    } catch (error) {
      setSuccessMsg("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      setTimeout(() => {
        window.location.reload();
      }, 5000); // Espera 5 segundos antes de recargar
    } finally {
      setIsSubmitting(false);
    }
  }

  // Limpiar error al escribir
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errorName) setErrorName("");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorEmail) setErrorEmail("");
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (errorMessage) setErrorMessage("");
  };


  return (
    <div className="contact-section">
      <div className="overlay">
        <div className="contact-container">
          <h3>Saludar</h3>
          <h1>Contacto</h1>
          {successMsg && (
            <div className="success-message">{successMsg}</div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre aquí" value={name} onChange={handleNameChange} />
                {errorName && <div className="error-message">{errorName}</div>}
              </div>
              <div className="input-field">
                <label>Correo electrónico</label>
                <input type="email" placeholder="Escribe tu email" value={email} onChange={handleEmailChange} />
                {errorEmail && <div className="error-message">{errorEmail}</div>}
              </div>
            </div>
            <div className="input-field">
              <label>¿En qué podemos ayudarte?</label>
              <textarea placeholder="Inserta aquí tu duda" className="input-help" value={message} onChange={handleMessageChange} />
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={isSubmitting ? "sending" : ""}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
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
          <p>Copyright © {getCurrentYear()}</p>
        </div>
      </div>
    </div>
  );
};