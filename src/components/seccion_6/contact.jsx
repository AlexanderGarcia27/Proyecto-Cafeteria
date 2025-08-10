import { useState } from 'react';
import '../css/seccion_6/cssseccion_6.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {sendEmail} from "../../services/contactService";
import FAQ from '../FAQ';
import Swal from 'sweetalert2';

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

    setSuccessMsg("");

    // Validar campos
    if (!name.trim()) {
      Swal.fire({
        icon: 'error',
        iconColor: '#bc6c25',
        title: 'Campo requerido',
        text: 'Por favor, ingresa tu nombre.',
        confirmButtonColor: '#bc6c25'
      });
      return;
    }
    
    if (!email.trim()) {
      Swal.fire({
        icon: 'error',
        iconColor: '#bc6c25',
        title: 'Campo requerido',
        text: 'Por favor, ingresa tu correo electrónico.',
        confirmButtonColor: '#bc6c25'
      });
      return;
    }
    
    if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        iconColor: '#bc6c25',
        title: 'Email inválido',
        text: 'Por favor, ingresa un correo válido.',
        confirmButtonColor: '#bc6c25'
      });
      return;
    }
    
    if (!message.trim()) {
      Swal.fire({
        icon: 'error',
        iconColor: '#bc6c25',
        title: 'Campo requerido',
        text: 'Por favor, escribe tu mensaje.',
        confirmButtonColor: '#bc6c25'
      });
      return;
    }

    setIsSubmitting(true);
    // Codificar el email en base64
    const encodedEmail = btoa(email);
    const data = { name, email: encodedEmail, message };
    try {
      const result = await sendEmail(data);
      if (result && result.message && !result.message.toLowerCase().includes("error")) {
        Swal.fire({
          icon: 'success',
          iconColor: '#bc6c25',
          title: '¡Mensaje enviado!',
          text: 'Tu mensaje ha sido enviado correctamente.',
          confirmButtonColor: '#bc6c25',
          timer: 2000,
          showConfirmButton: false
        });
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        Swal.fire({
          icon: 'error',
          iconColor: '#bc6c25',
          title: 'Error al enviar',
          text: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.',
          confirmButtonColor: '#bc6c25'
        });
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        iconColor: '#bc6c25',
        title: 'Error al enviar',
        text: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.',
        confirmButtonColor: '#bc6c25'
      });
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Manejar cambios en los inputs
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


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
                <input
                  type="text"
                  placeholder="Tu nombre aquí"
                  value={name}
                  onChange={handleNameChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="input-field">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  placeholder="Escribe tu email"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="input-field">
              <label>¿En qué podemos ayudarte?</label>
              <textarea
                placeholder="Inserta aquí tu duda"
                className="input-help"
                value={message}
                onChange={handleMessageChange}
                disabled={isSubmitting}
              />
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
        {/*Aqui inicia lo de preguntas uwu debajo de aqui */}
        <FAQ />
       
        {showModal && <ModalCarrito onClose={() => setShowModal(false)} />}
        {/*Aqui termina  lo de preguntas uwu sobre aqui */}
        <div className="contact-footer">
          <div className="contact-info">
            <h4 id="h4-footer">¿Dónde encontrarnos?</h4>
            <p id="p-footer"><b>📍 Calle Principal #123,<br />
              Centro, Zacualtipán de Ángeles, Hidalgo<br />
              C.P. 43200, México</b>
            </p>
            <div className="social-icons">
              <a className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a className="social-icon">
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