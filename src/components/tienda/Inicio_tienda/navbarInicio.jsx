import './seccion_1/navbarInicio.css'
import { BurgerMenu } from './BurgerMenu'
import { Link } from "react-router-dom";

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
                    <Link to="/home" className="nav-link">Inicio</Link>
                    <a href="#productos" className="nav-link">Productos</a>
                    <button className='cart-btn' style={{ textDecoration: "none" }}>
                        <img 
                            src="/src/assets/Shopping cart.png" 
                            alt="Carrito de compras" 
                            className="cart-icon"
                        />
                    </button>
                </div>
            </div>
        </nav>
    )
}
