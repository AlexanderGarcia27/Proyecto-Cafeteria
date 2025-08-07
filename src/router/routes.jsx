import { createBrowserRouter } from "react-router";
import App from "../App";
import Reservacion from "../components/Reservacion";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Tienda from "../components/tienda/index";
import { Email } from "../components/restaurar_Contraseña/email";
import { Password } from "../components/restaurar_Contraseña/password";

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
        path: "/restaurar-contraseña",
        Component: Email
    },
    {
        path: "/cambiar-contraseña",
        Component: Password
    }
])

export default router;