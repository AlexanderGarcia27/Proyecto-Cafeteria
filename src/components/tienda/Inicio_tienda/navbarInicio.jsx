import './inicio_css/navbarInicio2.css'
import { BurgerMenu } from './BurgerMenu'
import { Link } from "react-router-dom";
import logo from '../../../assets/imagenes_1/logo.png'
import shoppingCart from '../../../assets/Shopping cart.png'

export const NavbarInicio = () => {
    return (
        <nav id="navbarInicio">
            <div>
                <BurgerMenu />
                <div className="logo-container">
                    <img
                        src={logo}
                        alt="Logo Cafetería"
                        className="logo"
                    />
                    <span className="logo-text">Barista</span>
                </div>
                <div className="nav-links">
                    <Link to="/home" className="nav-link">Inicio</Link>
                    <a href="#productos" className="nav-link">Productos</a>
                    <a href="/CarritoDeCompras" className='tienda-cart-btn' style={{ textDecoration: "none" }}>
                        <img
                            src={shoppingCart}
                            alt="Carrito de compras"
                            className="tienda-cart-icon"
                        />
                    </a>
                </div>
            </div>
        </nav>
    )
}
