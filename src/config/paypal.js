// Configuración de PayPal
// Cambia estas credenciales por las tuyas de PayPal

export const paypalConfig = {
  // Para desarrollo (Sandbox)
  clientId: "AVrm4h1bjkQkbD-gCNBOwbQ1N2buPlZSua1qFM2JjmNUwJkeeNtirgQOyzE4FVFkRTxNKbv3gGkgssC5", // Tu Client ID real de PayPal Sandbox
  
  // Para producción
  // clientId: "tu-client-id-de-produccion",
  
  // Configuración adicional
  currency: "MXN",
  intent: "capture",
  
  // URLs de PayPal
  sandbox: true, // Cambia a false para producción
};

// Función para obtener el Client ID según el entorno
export const getPayPalClientId = () => {
  if (paypalConfig.sandbox) {
    return paypalConfig.clientId; // Sandbox
  } else {
    return paypalConfig.clientId; // Producción
  }
};
