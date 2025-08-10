import PaginaProductos from "./PaginaProductos";
import { NavbarInicio } from "./Inicio_tienda/navbarInicio";
import BackgroundSection from "./Inicio_tienda/BackgroundSection";
import { TextComponent } from "./Inicio_tienda/TextComponent";

function Tienda() {
  return (
    <>
      <BackgroundSection>
        <NavbarInicio />
        <TextComponent />
      </BackgroundSection>
      <div id='productos'>
        <PaginaProductos/>
      </div>

    </>
  );
}

export default Tienda;



