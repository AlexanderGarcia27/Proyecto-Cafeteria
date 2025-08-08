import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Reservacion from "../components/Reservacion";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Tienda from "../components/tienda/index";
import { Email } from "../components/restaurar_Contraseña/email";
import CarritoDeCompras from "../components/carrito-de-compras/carrito-de-compras";
import ProtectedRoute from "../components/ProtectedRoute";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    },
    {
        path: "/restaurar-contraseña",
        Component: Email
    },
    {
        path: "/home",
        element: (
            <ProtectedRoute>
                <App />
            </ProtectedRoute>
        )
    },
    {
        path: "/reservacion",
        element: (
            <ProtectedRoute>
                <Reservacion />
            </ProtectedRoute>
        )
    },
    {
        path: "/tienda",
        element: (
            <ProtectedRoute>
                <Tienda />
            </ProtectedRoute>
        )
    },
    {
        path: "/carritodecompras",
        element: (
            <ProtectedRoute>
                <CarritoDeCompras />
            </ProtectedRoute>
        )
    }
])

export default router;