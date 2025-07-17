import ComponentCard1 from "../components/ComponentCard1";
import ComponentCard2 from "../components/ComponentCard2";
import ComponentCard3 from "../components/ComponentCard3";
import "../components/index.css";

const ComponentTestimonialS5 = () => {
  return (
    <div className="testimonialXD">
    <div className="testimonial-section">
    
      <div className="testimonial-header">
        <p>Opiniones de clientes</p>
        <h1>Testimonios</h1>
      </div>
      <div className="testimonial-grid">
        <div className="testimonial-timeline"></div>
        <div className="testimonial-timeline-dot top"></div>
        <div className="testimonial-timeline-dot middle"></div>
        <div className="testimonial-timeline-dot bottom"></div>
        
        {/* Contenedor 1 con triángulo orientado hacia arriba */}
        <div className="card-container1" style={{gridRow: 1, gridColumn: 1, position: 'relative', display: 'flex', alignItems: 'center'}}>
          <div className="triangle-bullet triangle-right triangle-stick-top-right"></div>
          <ComponentCard1 />
        </div>
        
        {/* Contenedor 2 con triángulo orientado hacia la derecha */}
        <div className="card-container2" style={{gridRow: 1, gridColumn: 2, alignSelf: 'end', position: 'relative', display: 'flex', alignItems: 'center'}}>
          <div className="triangle-bullet triangle-left triangle-stick-top"></div>
          <ComponentCard2 />
        </div>
        
        {/* Contenedor 3 con triángulo orientado hacia abajo */}
        <div className="card-container3" style={{gridRow: 2, gridColumn: 1, position: 'relative', display: 'flex', alignItems: 'center'}}>
          <div className="triangle-bullet triangle-right2 triangle-position-bottom-right"></div>
          <ComponentCard3/>
        </div>
        
        {/* Espacio vacío (abajo derecha) */}
        <div style={{gridRow: 2, gridColumn: 2}}></div>
      </div>
    </div>
    </div>
  );
};

export default ComponentTestimonialS5;