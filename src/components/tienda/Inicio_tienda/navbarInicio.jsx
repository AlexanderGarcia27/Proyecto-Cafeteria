import './inicio_css/navbarInicio2.css'
import { BurgerMenu } from './BurgerMenu'

export const NavbarInicio = () => {
    return (
        <nav id="tienda-navbarInicio">
            <div>
                <BurgerMenu />
                <div className="tienda-logo-container">
                    <img
                        src="/src/assets/imagenes_1/logo.png"
                        alt="Logo Cafetería"
                        className="tienda-logo"
                    />
                    <span className="tienda-logo-text">Barista</span>
                </div>
                <div className="tienda-nav-links">
                    <a href="#inicio" className="tienda-nav-link">Inicio</a>
                    <a href="#productos" className="tienda-nav-link">Productos</a>
                    <a href="/CarritoDeCompras" className='tienda-cart-btn' style={{ textDecoration: "none" }}>
                        <img 
                            src="/src/assets/Shopping cart.png" 
                            alt="Carrito de compras" 
                            className="tienda-cart-icon"
                        />
                    </a>
                </div>
            </div>
        </nav>
    )
}
