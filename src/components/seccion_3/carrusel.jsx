import { useState, useEffect, useRef } from "react";
import '../css/seccion_3/cssseccion_3.css';

export const Carrusel = () => {
  const baristas = [
    { name: "Ana", role: "Maestra Barista", img: "pexels-mizunokozuki-13736419.jpg", text: "Maestra del latte art, convierte cada café en una obra de Zacualtipán" },
    { name: "Javier", role: "Especialista en Tueste", img: "barista-2.jpg", text: "Conoce los secretos de cada grano, experto en tueste y extracciones perfectas." },
    { name: "Marco", role: "Creador de Bebidas", img: "barista-3.jpg", text: "Innovador de sabores, te sorprenderá con sus bebidas especiales." },
    { name: "Luis", role: "Barista Experto", img: "barista-4.jpg", text: "Rápido y eficiente, tu café favorito listo en un instante." },
    { name: "Carlos", role: "Experto en Expreso", img: "barista.jpg", text: "Perfeccionista del expreso, asegura la intensidad y cremosidad." },
    { name: "Diego", role: "Barista Senior", img: "barista-5.jpg", text: "Crea el ambiente perfecto, haciendo de cada visita una experiencia única." },
    { name: "Raúl ", role: "Barista Dedicado", img: "_barista-haciendo-cafe-de-filtro_0.jpg", text: "Siempre atento a tus preferencias, para que disfrutes tu café ideal." },
    { name: "Andrés ", role: "Entrenador de Baristas", img: "pexels-elletakesphotos-2101154.jpg", text: "Comparte su pasión y conocimiento para asegurar la calidad de cada taza." },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [startIndex, setStartIndex] = useState(4); 
  const containerRef = useRef(null);

  // Determinar items por vista basado en el tamaño de pantalla
  const getItemsPerView = () => {
    if (windowWidth <= 767) return 1; // Mobile: mostrar todos verticalmente
    if (windowWidth <= 1024) return 2; // Tablet: 2 items
    return 4; // Desktop: 4 items
  };

  const itemsPerView = getItemsPerView();
  const isMobile = windowWidth <= 767;

  const extendedList = isMobile 
    ? baristas // En móvil, mostrar solo la lista original
    : [
        ...baristas.slice(-itemsPerView),
        ...baristas,
        ...baristas.slice(0, itemsPerView),
      ];

  const maxIndex = isMobile ? 0 : baristas.length + itemsPerView; 

  // Escuchar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Resetear el índice cuando cambie el tamaño de pantalla
  useEffect(() => {
    setStartIndex(getItemsPerView());
  }, [windowWidth]);

  const handlePrev = () => {
    if (!isMobile) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isMobile) {
      setStartIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (isMobile) return; // No aplicar transformaciones en móvil

    const container = containerRef.current;
    const cardWidth = 286 + 30; 

    container.style.transition = "transform 0.5s ease";
    container.style.transform = `translateX(-${startIndex * cardWidth}px)`;

    const handleTransitionEnd = () => {
      container.style.transition = "none";

      if (startIndex <= 0) {
        setStartIndex(baristas.length);
        container.style.transform = `translateX(-${baristas.length * cardWidth}px)`;
      } else if (startIndex >= maxIndex) {
        setStartIndex(itemsPerView);
        container.style.transform = `translateX(-${itemsPerView * cardWidth}px)`;
      }
    };

    container.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      container.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [startIndex, baristas.length, itemsPerView, maxIndex, isMobile]);

  return (
    <div className="team-section">
      <p className="subheading">Baristas <span>Talentosos</span></p>
      <h2 className="heading">Conoce nuestro personal</h2>

      <div className="carousel-wrapper">
        {!isMobile && (
          <button className="arrow left" onClick={handlePrev}>&#10094;</button>
        )}

        <div className="team-container" ref={containerRef}>
          {extendedList.map((person, idx) => (
            <div className="team-card" key={idx}>
              <img src={`src/assets/baristas-carrusel/${person.img}`} alt={person.name} />
              <div className="team-info">
                <h3>{person.name} <span className="badge boss">{person.role}</span></h3>
                <p>{person.text}</p>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <button className="arrow right" onClick={handleNext}>&#10095;</button>
        )}
      </div>
    </div>
  );
};