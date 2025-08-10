import '../../components/css/seccion_2/ImageSection.css';

export const ImageSection = ({ src, alt, children }) => {
  return (
    <div className="section2-image-container">
      <img className="section2-image" src={src} alt={alt} />
      <div className="section2-image-gradient"></div>
      {children}
    </div>
  );
} 