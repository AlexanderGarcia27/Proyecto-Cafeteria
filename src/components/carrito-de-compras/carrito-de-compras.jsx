import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/carrito-de-compras/carrito-de-compras.css";
import cafeImg from "../../assets/tienda-productos/bebidad-calientes/cafe.jpg";
import Swal from 'sweetalert2';
import PayPalButton from "./PayPalButton";

const CarritoDeCompras = () => {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productosInfo, setProductosInfo] = useState({});

  const irATienda = () => {
    navigate("/tienda");
  };



  // Función para obtener información de un producto específico
  const fetchProductoInfo = async (productId) => {
    try {
      console.log('Obteniendo info del producto:', productId);
      
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      // Intentar obtener el producto específico
      const response = await fetch(`https://reservacion-citas.onrender.com/api/products/${productId}`, {
        method: 'GET',
        headers,
        credentials: 'include',
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Info del producto obtenida:', data);
        return data;
      }
      
      // Si no funciona el endpoint específico, obtener todos los productos y filtrar
      console.log('Intentando obtener todos los productos para filtrar...');
      const allProductsResponse = await fetch('https://reservacion-citas.onrender.com/api/products', {
        method: 'GET',
        headers,
        credentials: 'include',
      });
      
      if (allProductsResponse.ok) {
        const allProducts = await allProductsResponse.json();
        console.log('Todos los productos obtenidos:', allProducts);
        
        // Filtrar el producto por ID
        const productoEncontrado = allProducts.find(producto => producto.id === productId);
        console.log('Producto encontrado por filtrado:', productoEncontrado);
        
        return productoEncontrado || null;
      }
      
      return null;
    } catch (error) {
      console.error('Error obteniendo info del producto:', error);
      return null;
    }
  };

  // Función para obtener items del carrito si existe un endpoint específico
  const fetchCarritoItems = async (carritoId) => {
    try {
      console.log('=== INTENTANDO OBTENER ITEMS DEL CARRITO ===');
      console.log('Carrito ID:', carritoId);
      
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      // Intentar diferentes endpoints posibles
      const endpointsPosibles = [
        `https://reservacion-citas.onrender.com/api/carts/${carritoId}/items`,
        `https://reservacion-citas.onrender.com/api/carts/${carritoId}`,
        `https://reservacion-citas.onrender.com/api/carts/items`
      ];
      
      for (const endpoint of endpointsPosibles) {
        try {
          console.log('Probando endpoint:', endpoint);
          const response = await fetch(endpoint, {
            method: 'GET',
            headers,
            credentials: 'include',
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log('Items obtenidos de', endpoint, ':', data);
            return data;
          }
        } catch (err) {
          console.log('Endpoint falló:', endpoint, err.message);
        }
      }
      
      return null;
    } catch (error) {
      console.error('Error obteniendo items:', error);
      return null;
    }
  };

  // Función para obtener el carrito activo
  const fetchCarrito = async () => {
    try {
      console.log('=== OBTENIENDO CARRITO ACTIVO ===');
      console.log('localStorage completo:', localStorage);
      
      const token = localStorage.getItem('token');
      console.log('Token disponible:', token ? 'Sí' : 'No');
      console.log('Token completo:', token);
      
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      const response = await fetch('https://reservacion-citas.onrender.com/api/carts/active', {
        method: 'GET',
        headers,
        credentials: 'include',
      });
      
      console.log('Status de respuesta carrito:', response.status);
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('No estás autenticado. Inicia sesión nuevamente.');
        }
        if (response.status === 404) {
          // No hay carrito activo, está bien
          setCarrito(null);
          return;
        }
        throw new Error(`Error al obtener carrito: ${response.status}`);
      }
      
      const carritoData = await response.json();
      console.log('Carrito obtenido:', carritoData);
      console.log('Estructura del carrito:');
      console.log('- carritoData.data:', carritoData.data);
      console.log('- carritoData.data.items:', carritoData.data?.items);
      console.log('- carritoData.items:', carritoData.items);
      
      // El carrito real probablemente está en carritoData.data
      let carritoReal = carritoData.data || carritoData;
      console.log('Carrito real a usar:', carritoReal);
      
      // Si no tiene items, intentar obtenerlos por separado
      if (!carritoReal.items || carritoReal.items.length === 0) {
        console.log('No se encontraron items en el carrito, intentando endpoint específico...');
        const itemsData = await fetchCarritoItems(carritoReal.id);
        
        if (itemsData) {
          // Si obtenemos items, agregarselos al carrito
          if (itemsData.items) {
            carritoReal.items = itemsData.items;
          } else if (Array.isArray(itemsData)) {
            carritoReal.items = itemsData;
          } else if (itemsData.data && itemsData.data.items) {
            carritoReal.items = itemsData.data.items;
          }
          console.log('Carrito actualizado con items:', carritoReal);
        }
      }
      
      setCarrito(carritoReal);
      
      // Si tenemos items, obtener la información de cada producto
      if (carritoReal.items && carritoReal.items.length > 0) {
        console.log('Obteniendo información de productos...');
        console.log('Items del carrito:', carritoReal.items);
        
        // Obtener todos los productos de una vez para evitar múltiples requests
        const token = localStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
        };
        
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        
        try {
          const allProductsResponse = await fetch('https://reservacion-citas.onrender.com/api/products', {
            method: 'GET',
            headers,
            credentials: 'include',
          });
          
          if (allProductsResponse.ok) {
            const allProducts = await allProductsResponse.json();
            console.log('Todos los productos disponibles:', allProducts);
            
            const productosInfoTemp = {};
            
            // Para cada item del carrito, encontrar su producto correspondiente
            for (const item of carritoReal.items) {
              if (item.productId) {
                const productoEncontrado = allProducts.find(producto => producto.id === item.productId);
                if (productoEncontrado) {
                  productosInfoTemp[item.productId] = productoEncontrado;
                  console.log(`Producto encontrado para ${item.productId}:`, productoEncontrado.name);
                } else {
                  console.warn(`No se encontró producto con ID: ${item.productId}`);
                }
              }
            }
            
            console.log('Información de productos mapeada:', productosInfoTemp);
            setProductosInfo(productosInfoTemp);
          }
        } catch (error) {
          console.error('Error obteniendo todos los productos:', error);
        }
      }
      
    } catch (error) {
      console.error('Error al obtener carrito:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar carrito al montar el componente
  useEffect(() => {
    fetchCarrito();
  }, []);

  // Función para calcular subtotal
  const calcularSubtotal = () => {
    if (!carrito || !carrito.items) return 0;
    return carrito.items.reduce((total, item) => total + (item.unitaryPrice * item.quantity), 0);
  };

  // Función para calcular total
  const calcularTotal = () => {
    const subtotal = calcularSubtotal();
    const envio = 50; // Envío fijo
    return subtotal + envio;
  };

  // Función para manejar pago exitoso
  const handlePagoExitoso = async (order) => {
    try {
      console.log('=== PROCESANDO PEDIDO DESPUÉS DEL PAGO ===');
      console.log('Orden de PayPal:', order);
      console.log('Carrito actual:', carrito);
      console.log('ProductosInfo actual:', productosInfo);
      
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      // Cambiar el estado del carrito a completado
      console.log('=== CAMBIANDO ESTADO DEL CARRITO ===');
      console.log('Carrito ID:', carrito.id);
      
      const changeStatusResponse = await fetch('https://reservacion-citas.onrender.com/api/carts/change-status', {
        method: 'POST',
        headers,
        credentials: 'include',
        body: JSON.stringify({
          cartId: carrito.id,
          status: 'completed'
        }),
      });
      
      console.log('Status de respuesta change-status:', changeStatusResponse.status);
      
      if (changeStatusResponse.ok) {
        const statusData = await changeStatusResponse.json();
        console.log('Estado del carrito cambiado exitosamente:', statusData);
        
        // Mostrar mensaje de confirmación
        Swal.fire({
          icon: 'success',
          iconColor: '#B8742A',
          title: '¡Compra completada!',
          text: 'Tu pedido ha sido procesado y confirmado exitosamente',
          confirmButtonColor: '#B8742A',
          timer: 3000,
          showConfirmButton: false
        });
        
        // Limpiar el carrito después del pago exitoso
        console.log('Limpiando carrito...');
        setCarrito(null);
        setProductosInfo({});
        console.log('Carrito limpiado');
        
        // Redirigir a home después de un breve delay
        console.log('Redirigiendo a home en 3 segundos...');
        setTimeout(() => {
          navigate("/home");
        }, 3000);
        
      } else {
        const errorData = await changeStatusResponse.json();
        console.error('Error al cambiar estado del carrito:', errorData);
        
        Swal.fire({
          icon: 'warning',
          title: 'Pago procesado',
          text: 'El pago se realizó correctamente, pero hubo un problema al actualizar el estado del carrito. Contacta al soporte si tienes alguna duda.',
          confirmButtonColor: '#B8742A',
        });
        
        // Aún así limpiar el carrito localmente
        setCarrito(null);
        setProductosInfo({});
        
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      }
      
    } catch (error) {
      console.error('Error al procesar el pedido:', error);
      
      Swal.fire({
        icon: 'error',
        title: 'Error en el proceso',
        text: 'El pago se realizó correctamente, pero hubo un problema al procesar el pedido. Contacta al soporte si tienes alguna duda.',
        confirmButtonColor: '#B8742A',
      });
      
      // Aún así limpiar el carrito localmente
      setCarrito(null);
      setProductosInfo({});
      
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  };

  // Función para eliminar un producto del carrito
  const handleEliminarProducto = async (itemId, nombreProducto) => {
    // Mostrar confirmación antes de eliminar
    const result = await Swal.fire({
      icon: 'warning',
      iconColor: '#B8742A',
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar "${nombreProducto}" del carrito?`,
      showCancelButton: true,
      confirmButtonColor: '#B8742A',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    // Si el usuario cancela, no hacer nada
    if (!result.isConfirmed) {
      return;
    }

    try {
      console.log('=== ELIMINANDO PRODUCTO DEL CARRITO ===');
      console.log('Item ID a eliminar:', itemId);
      console.log('Nombre del producto:', nombreProducto);
      
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      const response = await fetch(`https://reservacion-citas.onrender.com/api/carts/delete/${itemId}`, {
        method: 'POST',
        headers,
        credentials: 'include',
      });
      
      console.log('Status de respuesta eliminar:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Producto eliminado exitosamente:', data);
        
        // Mostrar mensaje de éxito
        Swal.fire({
          icon: 'success',
          iconColor: '#B8742A',
          title: '¡Producto eliminado!',
          text: `"${nombreProducto}" ha sido eliminado del carrito`,
          confirmButtonColor: '#B8742A',
          timer: 2000,
          showConfirmButton: false
        });
        
        // Recargar el carrito para mostrar los cambios
        await fetchCarrito();
        
      } else {
        const errorData = await response.json();
        console.error('Error del servidor:', errorData);
        
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorData.message || 'No se pudo eliminar el producto. Inténtalo de nuevo.',
          confirmButtonColor: '#B8742A',
        });
      }
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'No se pudo conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.',
        confirmButtonColor: '#B8742A',
      });
    }
  };

  // Función para manejar error en el pago
  const handleErrorPago = (error) => {
    console.error('Error en el proceso de pago:', error);
  };

  // Estados de carga y error
  if (loading) {
    return (
      <div className="carrito-bg">
        <button className="carrito-ir-tienda" onClick={irATienda}>
          Ir a tienda
        </button>
        <h2 className="carrito-titulo">Carrito de compras</h2>
        <div className="carrito-wrapper">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '50vh',
            fontSize: '18px',
            color: 'white'
          }}>
            Cargando carrito...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="carrito-bg">
        <button className="carrito-ir-tienda" onClick={irATienda}>
          Ir a tienda
        </button>
        <h2 className="carrito-titulo">Carrito de compras</h2>
        <div className="carrito-wrapper">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '50vh',
            fontSize: '18px',
            color: 'white'
          }}>
            Error: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="carrito-bg">
                    <button 
        className="carrito-ir-tienda" 
        onClick={irATienda}
      >
        Ir a tienda
      </button>
      <h2 className="carrito-titulo">Carrito de compras</h2>
      <div className="carrito-wrapper">
        <div className="carrito-contenido">
          {!carrito || !carrito.items || carrito.items.length === 0 ? (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '50vh',
              fontSize: '18px',
              color: 'white',
              textAlign: 'center'
            }}>
              <p>Tu carrito está vacío</p>
              <p style={{ fontSize: '14px', marginTop: '10px' }}>
                Agrega productos desde la tienda para verlos aquí
              </p>
            </div>
          ) : (
            <>
              <table className="carrito-tabla">
                <thead>
                  <tr>
                    <th className="carrito-th producto">Producto</th>
                    <th className="carrito-th precio">Precio</th>
                    <th className="carrito-th cantidad">Cantidad</th>
                    <th className="carrito-th subtotal">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.items.map((item) => {
                    console.log('Renderizando item del carrito:', item);
                    console.log('Producto ID:', item.productId);
                    
                    // Obtener información del producto
                    const productoInfo = productosInfo[item.productId];
                    console.log('Información del producto encontrada:', productoInfo);
                    
                    const nombreProducto = productoInfo?.name || item.product?.name || item.name || 'Producto sin nombre';
                    const imagenProducto = productoInfo?.urlImage || item.product?.urlImage || item.urlImage || cafeImg;
                    
                    console.log('Nombre del producto a mostrar:', nombreProducto);
                    console.log('Imagen del producto a mostrar:', imagenProducto);
                    
                    return (
                      <tr key={item.id} className="carrito-producto-row">
                        <td className="carrito-td producto">
                          <div className="carrito-producto-info">
                            <button 
                              className="carrito-eliminar"
                              onClick={() => handleEliminarProducto(item.id, nombreProducto)}
                              title="Eliminar producto"
                            >
                              X
                            </button>
                            <img
                              src={imagenProducto}
                              alt={nombreProducto}
                              className="carrito-producto-img"
                              onError={(e) => {
                                e.target.src = cafeImg;
                              }}
                            />
                            <span className="carrito-producto-nombre">
                              {nombreProducto}
                            </span>
                          </div>
                        </td>
                        <td className="carrito-td precio">
                          ${item.unitaryPrice.toFixed(2)}
                        </td>
                        <td className="carrito-td cantidad">{item.quantity}</td>
                        <td className="carrito-td subtotal">
                          ${(item.unitaryPrice * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="carrito-totales">
                <div className="carrito-totales-box">
                  <h3 className="carrito-totales-titulo">Totales del carrito</h3>
                  <div className="carrito-totales-row">
                    <span>Subtotal</span>
                    <span>${calcularSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="carrito-totales-row">
                    <span>Envío</span>
                    <span>$50.00</span>
                  </div>
                  <div className="carrito-totales-row total">
                    <span>Total</span>
                    <span>${calcularTotal().toFixed(2)}</span>
                  </div>
                  <div className="paypal-button-container">
                    <PayPalButton 
                      total={calcularTotal()}
                      onSuccess={handlePagoExitoso}
                      onError={handleErrorPago}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarritoDeCompras;
