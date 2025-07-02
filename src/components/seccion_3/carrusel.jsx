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

  const itemsPerView = 4;
  const [startIndex, setStartIndex] = useState(itemsPerView); 
  const containerRef = useRef(null);

  const extendedList = [
    ...baristas.slice(-itemsPerView),
    ...baristas,
    ...baristas.slice(0, itemsPerView),
  ];

  const maxIndex = baristas.length + itemsPerView; 

  const handlePrev = () => {
    setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setStartIndex((prev) => prev + 1);
  };

  useEffect(() => {
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
  }, [startIndex, baristas.length, itemsPerView, maxIndex]);

  return (
    <div className="team-section">
      <p className="subheading">Baristas <span>Talentosos</span></p>
      <h2 className="heading">Conoce nuestro personal</h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>&#10094;</button>

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

        <button className="arrow right" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};
