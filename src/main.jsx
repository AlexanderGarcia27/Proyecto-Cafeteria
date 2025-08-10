import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import router from './router/routes.jsx'
import './index.css'
import { getPayPalClientId } from './config/paypal.js'

const initialOptions = {
  "client-id": getPayPalClientId(),
  currency: "MXN",
  intent: "capture",
};

createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider options={initialOptions}>
    <RouterProvider router={router} />
  </PayPalScriptProvider>
)
