

import { NavbarInicio } from './components/seccion_1/navbarInicio';
import { TextComponent } from './components/seccion_1/textComponent';
import BackgroundSection1 from './components/seccion_1/BackgroundSection1';
import { BackgroundSection } from './components/seccion_2/BackgroundSection';
import { ImageSection } from './components/seccion_2/ImageSection';
import { TextButtonSection } from './components/seccion_2/TextButtonSection';
import { Carrusel } from './components/seccion_3/carrusel';
import ComponentMenuS4 from './components/ComponentMenuS4';
import ComponentTestimonialS5 from './components/ComponentTestimonialS5';
import { Contact } from './components/seccion_6/contact';
import './index.css';

function App() {
  return (
    <>
      <BackgroundSection1>
        <NavbarInicio />
        <TextComponent />
      </BackgroundSection1>
      
      <BackgroundSection>
        <ImageSection src="../src/assets/imagenes_2/image_2.jpg" alt="Cafe KL">
          <div className="section2-image-text">
            Acompañándote desde 2015.<br />El mejor café en Zacualtipan.
          </div>
        </ImageSection>
        <TextButtonSection />
      </BackgroundSection>
      
      <Carrusel />
      <ComponentMenuS4 />
      <ComponentTestimonialS5 />
      <Contact />
    </>
  );
}

export default App;
