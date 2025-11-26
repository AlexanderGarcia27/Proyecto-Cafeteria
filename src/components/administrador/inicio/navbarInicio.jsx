import './css/navbarInicio2.css'
import { BurgerMenu } from './BurgerMenu'
import { Link } from "react-router-dom";
import logo from '../../../assets/imagenes_1/logo.png'

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
                    <Link to="/administrador-productos" className="tienda-nav-link">Productos</Link> 
                    <Link to="" className="tienda-nav-link">Ventas y gráficas</Link> 
                    <Link to="" className="tienda-nav-link">Mensajes</Link>
                </div>
            </div>
        </nav>
    )
}