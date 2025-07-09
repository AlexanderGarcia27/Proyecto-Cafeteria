import MenuCard from './components/ComponentMenuS4'
import { NavbarInicio } from './components/seccion_1/navbarInicio'
import { TextComponent } from './components/seccion_1/textComponent'
import { Carrusel } from './components/seccion_3/carrusel'
import { BackgroundSection } from './components/seccion_2/BackgroundSection'
import { ImageSection } from './components/seccion_2/ImageSection'
import { TextButtonSection } from './components/seccion_2/TextButtonSection'
import './index.css'

function App() {
  return (
    <>
      <NavbarInicio />
      <TextComponent />
      <BackgroundSection>
        <ImageSection src="../public/image_2.jpg" alt="Cafe KL">
          <div className="section2-image-text">
            Acompañándote desde 2015.<br />El mejor café en Zacualtipan.
          </div>
        </ImageSection>
        <TextButtonSection />
      </BackgroundSection>
    </>
  )
}

export default App