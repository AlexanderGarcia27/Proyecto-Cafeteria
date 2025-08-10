import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
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
        }}
      >
        {/* Botón ir a home */}
        <button
          onClick={() => navigate('/home')}
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            zIndex: 1000,
            padding: '12px 24px',
            background: '#B78752',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          Ir a Home
        </button>
        
        <h2 style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "2rem",
          margin: "2rem 0 1rem 0",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
        }}>
          Haz tu reservación en Klang
        </h2>
        <div style={{ width: "100%", maxWidth: 600, height: "600px" }}>
          <InlineWidget
            url="https://calendly.com/mxvalentin1822/30min?hide_gdpr_banner=1"
            styles={{
              width: "100%",
              height: "100%",
              border: "none",
              background: "transparent",
            }}
            pageSettings={{
              // backgroundColor: "#b78752",
              // primaryColor: "#1a1a1a",
              // textColor: "#333333",
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
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden",
      }}
    >

      
      {/* Columna izquierda - Calendario */}
      <div
        style={{
          flex: isMobile ? "none" : "0 0 50%",
          height: isMobile ? "60vh" : "100vh",
          background: "#B78752",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          position: "relative"
        }}
      >
        {/* Botón ir a home - Desktop */}
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
        
        <div style={{ width: "100%", maxWidth: 600, height: "600px" }}>
          <InlineWidget
            url="https://calendly.com/mxvalentin1822/30min"
            styles={{
              marginTop: "20px",
              width: "100%",
              height: "100%",
              border: "none",
              background: "transparent",
            }}
            pageSettings={{
              // backgroundColor: "#b78752",
              // primaryColor: "#1a1a1a",
              // textColor: "#333333",
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
          flex: isMobile ? "none" : "0 0 50%",
          height: isMobile ? "40vh" : "100vh",
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(188, 108, 37, 0.7)), url('/src/assets/calendario/kris-tian-FUHRgV7Pjr8-unsplash.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
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
          transition: "opacity 0.5s ease"
        }}>
          <h2 style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            margin: 0,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: "600"
          }}>
            {imageTexts[textIndex].title}
          </h2>
          <p>{imageTexts[textIndex].subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Reservacion;