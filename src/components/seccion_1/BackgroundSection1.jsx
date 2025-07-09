import '../css/seccion_1/BackgroundSection1.css';
import imageD from '../../assets/imagenes_1/image-D.jpg';
import imageP from '../../assets/imagenes_1/image-P.jpg';

const BackgroundSection1 = ({ children }) => {
  return (
    <div className="section1-background">
      <picture>
        <source srcSet={imageP} media="(max-width: 768px)" />
        <img
          src={imageD}
          alt="Fondo sección 1"
          className="section1-background__image"
        />
      </picture>
      <div className="section1-background__overlay" />
      <div className="section1-background__content">{children}</div>
    </div>
  );
};

export default BackgroundSection1; 