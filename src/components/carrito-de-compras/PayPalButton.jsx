import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';

const PayPalButton = ({ total, onSuccess, onError: onErrorCallback }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total.toFixed(2),
            currency_code: "MXN"
          },
          description: "Compra en Cafetería"
        }
      ]
    });
  };

  const onApprove = async (data, actions) => {
    try {
      console.log('=== PROCESANDO PAGO CON PAYPAL ===');
      console.log('Order ID:', data.orderID);
      
      const order = await actions.order.capture();
      console.log('Pago procesado exitosamente:', order);
      
      // Mostrar mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Pago exitoso!',
        text: 'Tu pedido ha sido procesado correctamente',
        confirmButtonColor: '#B8742A',
      });
      
      // Llamar función de éxito
      if (onSuccess) {
        onSuccess(order);
      }
      
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      
      Swal.fire({
        icon: 'error',
        title: 'Error en el pago',
        text: 'No se pudo procesar el pago. Inténtalo de nuevo.',
        confirmButtonColor: '#B8742A',
      });
      
      if (onErrorCallback) {
        onErrorCallback(error);
      }
    }
  };

  const onError = (err) => {
    console.error('Error de PayPal:', err);
    
    Swal.fire({
      icon: 'error',
      title: 'Error de PayPal',
      text: 'Ocurrió un error con PayPal. Inténtalo de nuevo.',
      confirmButtonColor: '#B8742A',
    });
    
    if (onErrorCallback) {
      onErrorCallback(err);
    }
  };

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onError={onError}
      style={{
        layout: "vertical",
        color: "gold",
        shape: "rect",
        label: "pay"
      }}
    />
  );
};

export default PayPalButton;
