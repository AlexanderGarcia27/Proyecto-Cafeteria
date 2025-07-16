import { NavbarInicio } from './components/seccion_1/navbarInicio';
import { TextComponent } from './components/seccion_1/textComponent';
import BackgroundSection1 from './components/seccion_1/BackgroundSection1';
import { BackgroundSection } from './components/seccion_2/BackgroundSection';
import { ImageSection } from './components/seccion_2/ImageSection';
import { TextButtonSection } from './components/seccion_2/TextButtonSection';
import './index.css';

function App() {
  return (
    <>
      <BackgroundSection1 id='inicio'>
        <NavbarInicio />
        <TextComponent />
      </BackgroundSection1>
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
    </>
  );
}

export default App;
