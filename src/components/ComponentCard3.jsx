import React, { useState } from "react";
import "../components/index.css";
const testimonial = {
    name: "Alfredo",
    role: "Cliente Nueva",
    img: "../assets/perfil1.jpg",
    bg: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=",
    text: "Descubrí esta cafetería hace poco y ya es un imprescindible. Su latte art es hermoso y el café con leche es mi nuevo favorito. ¡Volveré pronto!",
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

const ComponentCard3 = () => {
  const [rating, setRating] = useState(testimonial.rating);
  return (
    <div className="testimonial-card testimonial-card-left2">
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

export default ComponentCard3;
