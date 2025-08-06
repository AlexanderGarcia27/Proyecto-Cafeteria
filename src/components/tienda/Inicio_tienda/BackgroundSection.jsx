import './inicio_css/BackgroundSection2.css';
import imageD from '../../../assets/Inicio_tienda/image_1.jpg';
import imageP from '../../../assets/Inicio_tienda/image_2.jpg';

const BackgroundSection = ({ children }) => {
  return (
    <div className="tienda-section1-background">
      <picture>
        <source srcSet={imageP} media="(max-width: 768px)" />
        <img
          src={imageD}
          alt="Fondo sección 1"
          className="tienda-section1-background__image"
        />
      </picture>
      <div className="tienda-section1-background__overlay" />
      <div className="tienda-section1-background__content">{children}</div>
    </div>
  );
};

export default BackgroundSection; 