import '../css/seccion_1/navbarInicio.css'
import { BurgerMenu } from './BurgerMenu'
import { Link } from "react-router-dom"

export const NavbarInicio = () => {
    return (
        <nav id="navbarInicio">
            <div>
                <BurgerMenu />
                <div className="logo-container">
                    <img
                        src="/src/assets/imagenes_1/logo.png"
                        alt="Logo Cafetería"
                        className="logo"
                    />
                    <span className="logo-text">Barista</span>
                </div>
                <div className="nav-links">
                    <a href="#inicio" className="nav-link">Inicio</a>
                    <a href="#conocenos" className="nav-link">Conócenos</a>
                    <a href="#baristas" className="nav-link">Baristas</a>
                    <a href="#menu" className="nav-link">Menús</a>
                    <a href="#reseñas" className="nav-link">Reseñas</a>
                    <a href="#contacto" className="nav-link">Contacto</a>
                    <Link to="/reservacion" className='reservation-btn' style={{ textDecoration: "none" }} >
                        Reservacion <span>↗</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
