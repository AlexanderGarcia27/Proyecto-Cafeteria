import '../../css/seccion_1/navbarInicio.css'
import { BurgerMenu } from './BurgerMenu'

export const NavbarInicio = () => {
    return (
        <nav id="navbarInicio">
            <div>
                <BurgerMenu />
                <span className="logo logo-desktop">Barista</span>
                <span className="logo logo-mobile">B</span>
                <div className="nav-links">
                    <a href="#" className="nav-link active">Home</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Our Menu</a>
                    <a href="#" className="nav-link">Reviews</a>
                    <a href="#" className="nav-link">Contact</a>
                    <button className="reservation-btn">
                        Reservation <span>↗</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
