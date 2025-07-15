import React, { useState } from "react";
import "../components/index.css";
const testimonial = {
    name: " Roberto",
    role: "Cliente",
    img: "https://firebasestorage.googleapis.com/v0/b/integradora-314a9.appspot.com/o/perfil2.jpg?alt=media&token=2c8e89e1-c7ff-40d8-84a3-6f8caede24e2",
    bg: "https://firebasestorage.googleapis.com/v0/b/integradora-314a9.appspot.com/o/g-l-B4vRi4uc4kM-unsplash.jpg?alt=media&token=45152f59-8073-4223-9a2f-483d24bb5a68",
    text: "Vine por recomendación y quedé fascinado. Sus chilaquiles son deliciosos y el café, de verdad, tiene un sabor único. Un rincón auténtico en Hidalgo.",
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

const ComponentCard2 = () => {
  const [rating, setRating] = useState(testimonial.rating);
  return (
    <div className="testimonial-card testimonial-card-right">
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

export default ComponentCard2;