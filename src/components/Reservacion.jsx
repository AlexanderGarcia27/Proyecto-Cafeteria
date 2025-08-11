import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import calendarioImage from '../assets/calendario/kris-tian-FUHRgV7Pjr8-unsplash.jpg';

const imageTexts = [
  {
    title: "Reserva tu momento especial en Klang",
    subtitle: "Un café, una charla, una pausa que vale la pena"
  },
  {
    title: "Vive la experiencia Klang",
    subtitle: "Reserva tu mesa y disfruta de un momento único"
  },
  {
    title: "Tu café te espera en Klang",
    subtitle: "Reserva fácil, sin complicaciones"
  },
  {
    title: "Klang Café",
    subtitle: "Reserva tu espacio. Vive el momento."
  }
];

const Reservacion = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 900 && window.innerWidth <= 1200);
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      setIsTablet(window.innerWidth > 900 && window.innerWidth <= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cambiar textos automáticamente cada 5 segundos con fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % imageTexts.length);
        setFade(true);
      }, 500); // Duración del fade out
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#B78752",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0 1rem",
          position: "relative"
        }}
      >
        <h2 style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.5rem",
          margin: "2rem 0 1rem 0",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          padding: "0 1rem",
          width: "100%"
        }}>
          Haz tu reservación en Klang
        </h2>
        <div style={{ 
          width: "100%", 
          maxWidth: 600, 
          height: "500px",
          marginTop: "1rem"
        }}>
          <InlineWidget
            url="https://calendly.com/mxvalen13/30min?hide_gdpr_banner=1"
            styles={{
              width: "100%",
              height: "100%",
              border: "none",
              background: "transparent",
            }}
            pageSettings={{
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              hideGdprBanner: true,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: isTablet ? "column" : "row",
        overflow: "hidden",
      }}
    >
      {/* Columna izquierda - Calendario */}
      <div
        style={{
          flex: isTablet ? "none" : "0 0 50%",
          height: isTablet ? "60vh" : "100vh",
          background: "#B78752",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          position: "relative"
        }}
      >
        {/* Botón ir a home - Solo Desktop */}
        {!isTablet && (
          <button
            onClick={() => navigate('/home')}
            style={{
              position: 'absolute',
              top: '30px',
              left: '30px',
              zIndex: 1000,
              padding: '12px 24px',
              background: '#fff',
              color: '#B78752',
              border: '2px solid #B78752',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            Ir a Home
          </button>
        )}
        
        <div style={{ 
          width: "100%", 
          maxWidth: isTablet ? 800 : 600, 
          height: isTablet ? "500px" : "600px",
          marginTop: isTablet ? "2rem" : "20px"
        }}>
          <InlineWidget
            url="https://calendly.com/mxvalen13/30min"
            styles={{
              width: "100%",
              height: "100%",
              border: "none",
              background: "transparent",
            }}
            pageSettings={{
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              hideGdprBanner: true,
            }}
            prefill={{ name: "", email: "" }}
          />
        </div>
      </div>

      {/* Columna derecha - Imagen de fondo */}
      <div
        style={{
          flex: isTablet ? "none" : "0 0 50%",
          height: isTablet ? "40vh" : "100vh",
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(188, 108, 37, 0.7)), url(${calendarioImage})`,
          backgroundSize: "cover",
          backgroundPosition: isTablet ? "center center" : "center left",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isTablet ? "scroll" : "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Contenido opcional sobre la imagen */}
        <div style={{ 
          textAlign: "center", 
          color: "#ffffff",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease",
          padding: isTablet ? "2rem 1rem" : "0"
        }}>
          <h2 style={{
            fontSize: isTablet ? "1.8rem" : "2rem",
            margin: 0,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: "600"
          }}>
            {imageTexts[textIndex].title}
          </h2>
          <p style={{
            fontSize: isTablet ? "1.1rem" : "1rem",
            margin: "1rem 0 0 0"
          }}>
            {imageTexts[textIndex].subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reservacion;