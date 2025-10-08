import './css/navbarInicio2.css'
import { BurgerMenu } from './BurgerMenu'
import { Link } from "react-router-dom";
import logo from '../../../assets/imagenes_1/logo.png'
import shoppingCart from '../../../assets/Shopping cart.png'

export const NavbarInicio = () => {
    return (
        <nav id="tienda-navbarInicio">
            <div>
                <BurgerMenu />
                <div className="tienda-logo-container">
                    <img
                        src={logo}
                        alt="Logo Cafetería"
                        className="tienda-logo"
                    />
                    <span className="tienda-logo-text">El Rincon del Cafe</span>
                </div>
                <div className="tienda-nav-links">
                    <Link to="" className="tienda-nav-link">Agregar Productos</Link> 
                    <Link to="" className="tienda-nav-link">Ventas y gráficas</Link> 
                    <Link to="" className="tienda-nav-link">Inicio</Link>
                </div>
            </div>
        </nav>
    )
}