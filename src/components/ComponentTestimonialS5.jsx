import ComponentCard1 from "../components/ComponentCard1";
import ComponentCard2 from "../components/ComponentCard2";
import ComponentCard3 from "../components/ComponentCard3";
import "../components/index.css";

const ComponentTestimonialS5 = () => {
  return (
    <div className="testimonial-section">
    
      <div className="testimonial-header">
        <p>Reviews by Customers</p>
        <h1>Testimonials</h1>
      </div>
      <div className="testimonial-grid">
        <div className="testimonial-timeline"></div>
        <div className="testimonial-timeline-dot top"></div>
        <div className="testimonial-timeline-dot middle"></div>
        <div className="testimonial-timeline-dot bottom"></div>
        {/* Card 1 */}
        <div style={{gridRow: 1, gridColumn: 1, position: 'relative', display: 'flex', alignItems: 'center'}}>
          <ComponentCard1 />
        </div>
        {/* Card 2 */}
        <div style={{gridRow: 1, gridColumn: 2, alignSelf: 'end', position: 'relative', display: 'flex', alignItems: 'center'}}>
          <ComponentCard2 />
        </div>
        {/* Card 3 */}
        <div style={{gridRow: 2, gridColumn: 1, position: 'relative', display: 'flex', alignItems: 'center'}}>
          <ComponentCard3/>
        </div>
        {/* Espacio vacío (abajo derecha) */}
        <div style={{gridRow: 2, gridColumn: 2}}></div>
      </div>
    </div>
  );
};

export default ComponentTestimonialS5;