import { createBrowserRouter } from "react-router";
import App from "../App";
import Reservacion from "../components/Reservacion";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Tienda from "../components/tienda/index";
import CarritoDeCompras from "../components/carrito-de-compras/carrito-de-compras";

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
        path: "/home",
        Component: App
    },
    {
        path: "/reservacion",
        Component: Reservacion
    },
    {
        path: "/tienda",
        Component: Tienda
    },
    {
        path: "/carritodecompras",
        Component: CarritoDeCompras
    }
])

export default router;