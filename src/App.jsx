import { NavbarInicio } from './components/seccion_1/navbarInicio';
import { TextComponent } from './components/seccion_1/TextComponent';
import BackgroundSection1 from './components/seccion_1/BackgroundSection1';
import { BackgroundSection } from './components/seccion_2/BackgroundSection';
import { ImageSection } from './components/seccion_2/ImageSection';
import { TextButtonSection } from './components/seccion_2/TextButtonSection';
import { Carrusel } from './components/seccion_3/carrusel';
import './index.css';
import MenuCard from './components/ComponentMenuS4'
import {Contact} from './components/seccion_6/contact'
import ComponentTestimonialS5 from './components/ComponentTestimonialS5'

function App() {
  return (
    <>
      <div id='inicio'>
      <BackgroundSection1>
        <NavbarInicio />
        <TextComponent />
      </BackgroundSection1>
      </div>
      <div id='conocenos'>
        <BackgroundSection>
          <ImageSection src="../src/assets/imagenes_2/image_2.jpg" alt="Cafe KL">
            <div className="section2-image-text">
              Acompañándote desde 2015.<br />El mejor café en Zacualtipan.
            </div>
          </ImageSection>
          <TextButtonSection />
        </BackgroundSection>
      </div>
      <div id='baristas'>
        <Carrusel/>
      </div>
      <div id='menu'>
        <MenuCard/>
      </div>
      <div id='reseñas'>
        <ComponentTestimonialS5/>
      </div>
      <div id='contacto'>
        <Contact/>
      </div> 
    </>
  );
}

export default App;