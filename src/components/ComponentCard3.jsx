import React, { useState } from "react";
import "../components/index.css";
const testimonial = {
    name: "Alfredo",
    role: "Cliente Nueva",
    img: "https://firebasestorage.googleapis.com/v0/b/integradora-314a9.appspot.com/o/perfil3.jpg?alt=media&token=cf92f475-6105-4cc0-ad96-6cfba318aa5e",
    bg: "https://firebasestorage.googleapis.com/v0/b/integradora-314a9.appspot.com/o/g-l-0ERCY889EBw-unsplash.jpg?alt=media&token=aa6f633a-f2d6-47c3-9f03-dd2dee6b5e48",
    text: "Descubrí esta cafetería hace poco y ya es un imprescindible. Su latte art es hermoso y el café con leche es mi nuevo favorito. ¡Volveré pronto!",
    rating: 5
};

const FixedStars = ({ rating }) => (
  <span className="testimonial-stars">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        style={{
          color: rating >= star ? "#fff" : "#bdbdbd",
          fontSize: "1.2rem",
        }}
      >
        ★
      </span>
    ))}
  </span>
);

const ComponentCard3 = () => {
  const rating = testimonial.rating;
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
        <FixedStars rating={rating} />
      </div>
    </div>
  );
};

export default ComponentCard3;
