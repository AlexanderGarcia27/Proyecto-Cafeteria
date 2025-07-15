import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

const getWidgetHeight = () => {
  // Altura del widget: 100vh menos el espacio del título y márgenes
  if (window.innerWidth <= 480) return window.innerHeight - 80; // móvil
  if (window.innerWidth <= 900) return window.innerHeight - 100; // tablet
  return window.innerHeight - 120; // desktop
};

const getTitleFontSize = () => {
  if (window.innerWidth <= 480) return "1.5rem";
  if (window.innerWidth <= 900) return "2rem";
  return "2.5rem";
};

const getHorizontalPadding = () => {
  if (window.innerWidth <= 480) return "10px";
  if (window.innerWidth <= 900) return "32px";
  return "64px";
};

const Reservacion = () => {
  const [widgetHeight, setWidgetHeight] = useState(getWidgetHeight());
  const [titleFontSize, setTitleFontSize] = useState(getTitleFontSize());
  const [horizontalPadding, setHorizontalPadding] = useState(getHorizontalPadding());

  useEffect(() => {
    const handleResize = () => {
      setWidgetHeight(getWidgetHeight());
      setTitleFontSize(getTitleFontSize());
      setHorizontalPadding(getHorizontalPadding());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        background: "#c97a2b",
        height: "100vh",
        padding: `1.5rem ${horizontalPadding} 0 ${horizontalPadding}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
        <h2
          style={{
            fontSize: titleFontSize,
            color: "#fff",
            textAlign: "center",
            margin: 0,
            wordBreak: "break-word",
            lineHeight: 1.1,
            width: "100%",
            maxWidth: 600,
          }}
        >
          Realiza tu reservación
        </h2>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", flex: 1 }}>
        <InlineWidget
          url="https://calendly.com/2022259-utsh/30min"
          styles={{
            width: "100%",
            maxWidth: 600,
            minWidth: 260,
            height: widgetHeight,
            border: "none",
            background: "transparent",
          }}
          pageSettings={{
            backgroundColor: "#c97a2b",
            primaryColor: "#1a1a1a",
            textColor: "#ffffff",
          }}
          prefill={{ name: "", email: "" }}
        />
      </div>
    </div>
  );
};

export default Reservacion;