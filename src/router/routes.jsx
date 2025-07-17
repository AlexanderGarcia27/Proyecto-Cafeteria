import { createBrowserRouter } from "react-router";
import App from "../App";
import Reservacion from "../components/Reservacion";

let router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "/reservacion",
        Component: Reservacion
    }
])

export default router;