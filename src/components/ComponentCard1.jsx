import React, { useState } from "react";
import "../components/index.css";
const testimonial = {
    name: "Luis",
    role: "Clienta Frecuente",
    img: "https://firebasestorage.googleapis.com/v0/b/integradora-314a9.appspot.com/o/perfil1.jpg?alt=media&token=b658fc02-396c-40b8-91af-0377a4aef491",
    bg: "https://firebasestorage.googleapis.com/v0/b/integradora-314a9.appspot.com/o/michael-boskovski-CY2N4pZmsbw-unsplash.jpg?alt=media&token=85318670-4027-45df-85c5-3bacd244d87a  ",
    text: "¡El mejor café de Zacualtipán! Siempre me siento como en casa, el ambiente es increíble y el servicio de sus baristas es excepcional. ¡Mi lugar favorito para empezar el día!",
    rating: 5
};

const InteractiveStars = ({ rating, onChange }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <span className="testimonial-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            cursor: "pointer",
            color: (hovered || rating) >= star ? "#fff" : "#bdbdbd",
            fontSize: "1.2rem",
            transition: "color 0.2s"
          }}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </span>
  );
};

const ComponentCard1 = () => {
  const [rating, setRating] = useState(testimonial.rating);
  return (
    <div className="testimonial-card testimonial-card-left">
      <img className="card-bg" src={testimonial.bg} alt="bg" />
      <div className="card-content">
        <div className="profile">
          <img className="profile-img" src={testimonial.img} alt="profile" />
          <span>
            <span className="profile-info">{testimonial.name}</span>
            <span className="profile-role">{testimonial.role}</span>
          </span>
        </div>
        <div className="testimonial-text">{testimonial.text}</div>
      </div>
      <div className="divider"></div>
      <div className="testimonial-footer">
        <span className="testimonial-rating">{rating}&nbsp;&nbsp;Rating</span>
        <InteractiveStars rating={rating} onChange={setRating} />
      </div>
    </div>
  );
};

export default ComponentCard1;