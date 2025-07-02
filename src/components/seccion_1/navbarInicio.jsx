import '../css/seccion_1/navbarInicio.css'
import { BurgerMenu } from './BurgerMenu'

export const NavbarInicio = () => {
    return (
        <nav id="navbarInicio">
            <div>
                <BurgerMenu />
                <span className="logo logo-desktop">Barista</span>
                <span className="logo logo-mobile">B</span>
                <div className="nav-links">
                    <a href="#" className="nav-link active">Inicio</a>
                    <a href="#" className="nav-link">Conócenos</a>
                    <a href="#" className="nav-link">Menús</a>
                    <a href="#" className="nav-link">Reseñas</a>
                    <a href="#" className="nav-link">Contacto</a>
                    <button className="reservation-btn">
                        Reservacion <span>↗</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
