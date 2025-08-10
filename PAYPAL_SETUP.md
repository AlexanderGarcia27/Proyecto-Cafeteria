# Configuración de PayPal para la Cafetería

## 🚀 Pasos para configurar PayPal

### 1. Crear cuenta de PayPal Developer

1. Ve a [developer.paypal.com](https://developer.paypal.com)
2. Crea una cuenta o inicia sesión
3. Ve a "Apps & Credentials"

### 2. Crear una aplicación

1. Haz clic en "Create App"
2. Dale un nombre (ej: "Cafeteria App")
3. Selecciona "Business" como tipo de aplicación
4. Haz clic en "Create App"

### 3. Obtener las credenciales

1. En tu aplicación, verás el **Client ID**
2. Copia el Client ID de Sandbox para desarrollo
3. Para producción, usa el Client ID de Live

### 4. Configurar en el proyecto

1. Abre el archivo `src/config/paypal.js`
2. Reemplaza `"test"` con tu Client ID real:

```javascript
export const paypalConfig = {
  clientId: "tu-client-id-aqui", // Reemplaza con tu Client ID
  currency: "MXN",
  intent: "capture",
  sandbox: true, // Cambia a false para producción
};
```

### 5. Probar el pago

1. Ejecuta el proyecto: `npm run dev`
2. Ve al carrito de compras
3. Haz clic en el botón de PayPal
4. Usa las credenciales de Sandbox para probar

## 🔧 Credenciales de Sandbox para pruebas

### Cuenta de comprador (Sandbox):
- **Email**: sb-1234567890@business.example.com
- **Contraseña**: (generada automáticamente)

### Cuenta de vendedor (Sandbox):
- **Email**: sb-1234567890@business.example.com
- **Contraseña**: (generada automáticamente)

## 📝 Notas importantes

- **Sandbox**: Para desarrollo y pruebas
- **Live**: Para producción real
- **Moneda**: Configurada en MXN (Pesos Mexicanos)
- **Captura automática**: Los pagos se capturan automáticamente

## 🛠️ Personalización

Puedes personalizar:
- Moneda en `src/config/paypal.js`
- Estilos del botón en `src/components/css/carrito-de-compras/carrito-de-compras.css`
- Comportamiento en `src/components/carrito-de-compras/PayPalButton.jsx`

## 🔒 Seguridad

- Nunca subas las credenciales reales a GitHub
- Usa variables de entorno para producción
- Mantén las credenciales de Sandbox para desarrollo
