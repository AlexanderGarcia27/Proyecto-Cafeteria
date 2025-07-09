import MenuCard from './components/ComponentMenuS4'
import { NavbarInicio } from './components/seccion_1/navbarInicio'
import { TextComponent } from './components/seccion_1/textComponent'
import { Carrusel } from './components/seccion_3/carrusel'
import './index.css'

function App() {
  return (
    <>
      <NavbarInicio />
      <TextComponent />
      <Carrusel/>
      <MenuCard/>
    </>
  )
}

export default App