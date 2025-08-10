import '../css/seccion_1/navbarInicio.css'
import { BurgerMenu } from './BurgerMenu'
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

export const NavbarInicio = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('https://reservacion-citas.onrender.com/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include' // Enviar cookies para logout
            });

            // Limpiar localStorage también
            localStorage.removeItem('token');
            
            // Mostrar mensaje de confirmación
            Swal.fire({
                icon: 'success',
                iconColor: '#B78752',
                title: 'Sesión cerrada',
                text: 'Has cerrado sesión exitosamente.',
                confirmButtonColor: '#B78752',
                timer: 1500,
                showConfirmButton: false
            });

            // Redirigir al login
            setTimeout(() => {
                navigate('/');
            }, 1600);

        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            // Redirigir de todas formas
            navigate('/');
        }
    };

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
                    <a href="/tienda" className="nav-link">Tienda</a>
                    <a href="#contacto" className="nav-link">Contacto</a>
                    <Link to="/reservacion" className='reservation-btn' style={{ textDecoration: "none" }} >
                        Reservacion <span>↗</span>
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className='reservation-btn'
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </nav>
    )
}
