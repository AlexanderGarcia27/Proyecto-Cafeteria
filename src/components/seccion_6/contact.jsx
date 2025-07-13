import '../css/seccion_6/cssseccion_6.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Contact = () => {
  return (
    <div className="contact-section">
      <div className="overlay">
        <div className="contact-container">
          <h3>Saluda</h3>
          <h1>Contacto</h1>
          <form className="contact-form">
            <div className="input-group">
              <div className="input-field">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre aquí" />
              </div>
              <div className="input-field">
                <label>Correo electrónico</label>
                <input type="email" placeholder="Escribe tu email" />
              </div>
            </div>
            <div className="input-field">
              <label>¿En qué podemos ayudarte?</label>
              <textarea placeholder="Inserta aquí tu duda" className="input-help" />
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
            <p id="p-footer">Lunes - Viernes: __________________ <strong>8:00 - 20:00</strong><br />
              Sábado: __________________ <strong>9:00 - 18:00</strong><br />
              Domingo: __________________ <strong>Cerrado</strong>
            </p>
          </div>
        </div>

        <div className="footer-note">
          <p>Copyright ©</p>
        </div>
      </div>
    </div>
  );
};
