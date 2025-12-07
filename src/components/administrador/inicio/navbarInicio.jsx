import './css/navbarInicio2.css'
import { BurgerMenu } from './BurgerMenu'
import { Link } from "react-router-dom";
import logo from '../../../assets/imagenes_1/logo.png'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const NavbarInicio = () => {
    const navigate = useNavigate(); 
    const handleLogout = async () => {
        try {
            const response = await fetch('https://proyecto-cafeteria-lm3l.onrender.com/api/auth/logout', {
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
        <nav id="tienda-navbarInicio">
            <div>
                <BurgerMenu />
                <div className="tienda-logo-container">
                    <img
                        src={logo}
                        alt="Logo Cafetería"
                        className="tienda-logo"
                    />
                    <span className="tienda-logo-text">Cafeteria Klang</span>
                </div>
                <div className="tienda-nav-links">
                    <Link to="/administrador-productos" className="tienda-nav-link">Productos</Link>
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