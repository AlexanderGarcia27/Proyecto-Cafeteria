/**
 * PaginaProductos.jsx
 * Menú de categorías funcional, productos obtenidos desde la base de datos.
 */
import React, { useState, useEffect } from "react";
import "./PaginaProductos.css";
import ModalCarrito from "./ModalCarrito";
// Iconos
import iconoBebidaFria from "../../assets/tienda-productos/icono-bebida-fria.png";
import iconoBebidaCaliente from "../../assets/tienda-productos/icono-bebida-caliente.png";
import iconoPostreFrio from "../../assets/tienda-productos/icono-postre-frio.png";
import iconoPostreCaliente from "../../assets/tienda-productos/icono-postre-caliente.png";
import iconoPlatilloEspecialidad from "../../assets/tienda-productos/icono-platillo-especialidad-Tradicional.png";
import botonMas from "../../assets/tienda-productos/boton-mas.svg";
// Bebidas frías
import cafeHelado from "../../assets/tienda-productos/bebidas-frias/cafe-helado.jpg";
import limonada from "../../assets/tienda-productos/bebidas-frias/limonada.jpg";
import teHelado from "../../assets/tienda-productos/bebidas-frias/te-helado.jpg";
// Bebidas calientes
import latte from "../../assets/tienda-productos/bebidad-calientes/latte.jpg";
import cafe from "../../assets/tienda-productos/bebidad-calientes/cafe.jpg";
import cafe1 from "../../assets/tienda-productos/bebidad-calientes/cafe1.jpg";
// Postres fríos
import helado from "../../assets/tienda-productos/postres-frios/helado.jpg";
import payFresa from "../../assets/tienda-productos/postres-frios/pay-fresa.jpg";
import payLimon from "../../assets/tienda-productos/postres-frios/pay-limon.jpg";
// Postres calientes
import galletas from "../../assets/tienda-productos/postres-calientes/galletas.jpg";
import hotcakes from "../../assets/tienda-productos/postres-calientes/hotcakes.jpg";
import waflez from "../../assets/tienda-productos/postres-calientes/waflez.jpg";
// Platillos especiales
import lasagna from "../../assets/tienda-productos/platillos-especiales/lazaña.jpg";
import pizza from "../../assets/tienda-productos/platillos-especiales/pizza-margarita.jpg";
import sushi from "../../assets/tienda-productos/platillos-especiales/sushi.jpg";
// Platillos tradicionales
import chilaquilesRojos from "../../assets/tienda-productos/platillos-tradicionales/chilaquiles-rojos.jpg";
import chilaquilesVerdes from "../../assets/tienda-productos/platillos-tradicionales/chilaquiles-verdes.jpg";
import huevoMex from "../../assets/tienda-productos/platillos-tradicionales/huevo-mex.jpg";

const categorias = [
  {
    titulo: "Bebidas",
    subcategorias: [
      { nombre: "Frías", icono: iconoBebidaFria, key: "bebidas-frias" },
      { nombre: "Calientes", icono: iconoBebidaCaliente, key: "bebidas-calientes" }
    ],
  },
  {
    titulo: "Postres",
    subcategorias: [
      { nombre: "Fríos", icono: iconoPostreFrio, key: "postres-frios" },
      { nombre: "Calientes", icono: iconoPostreCaliente, key: "postres-calientes" }
    ],
  },
  {
    titulo: "Platillos",
    subcategorias: [
      { nombre: "Especialidades", icono: iconoPlatilloEspecialidad, key: "platillos-especiales" },
      { nombre: "Tradicionales", icono: iconoPlatilloEspecialidad, key: "platillos-tradicionales" }
    ],
  },
];

// Función para verificar si el token es válido
const verificarToken = async (token) => {
  try {
    const response = await fetch('https://reservacion-citas.onrender.com/api/auth/verify', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    
    console.log('Verificación de token - Status:', response.status);
    return response.ok;
  } catch (error) {
    console.log('Error al verificar token:', error);
    return false;
  }
};

// Función para obtener productos desde la API
const fetchProductos = async (retryCount = 0) => {
  try {
    console.log('=== FETCH PRODUCTOS (intento ' + (retryCount + 1) + ') ===');
    console.log('Intentando obtener productos...');
    console.log('User Agent:', navigator.userAgent);
    console.log('Es móvil:', /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    console.log('Cookies disponibles:', document.cookie);
    
    let token = localStorage.getItem('token');
    console.log('Token en localStorage:', token ? 'Encontrado' : 'No encontrado');
    console.log('Longitud del token:', token ? token.length : 0);
    
    // Si tenemos token, verificar si es válido
    if (token && retryCount === 0) {
      const tokenValido = await verificarToken(token);
      console.log('Token válido:', tokenValido);
      
      if (!tokenValido) {
        console.log('Token inválido, limpiando localStorage');
        localStorage.removeItem('token');
        token = null;
      }
    }
    
    const headers = {
      'Content-Type': 'application/json',
    };
    
    // Si tenemos token válido, lo usamos en el header Authorization
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      console.log('Enviando token en Authorization header');
      console.log('Headers completos:', headers);
    } else {
      console.log('No hay token válido, enviando petición sin Authorization header');
    }
    
    console.log('Iniciando fetch a:', 'https://reservacion-citas.onrender.com/api/products');
    
    const response = await fetch('https://reservacion-citas.onrender.com/api/products', {
      method: 'GET',
      credentials: 'include', // También intentamos con cookies
      headers,
    });
    
    console.log('Status de respuesta:', response.status);
    console.log('URL de la petición:', response.url);
    console.log('Headers de respuesta:', Array.from(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.log('Respuesta de error:', errorText);
      
      if (response.status === 401) {
        console.log('Error 401 - Token inválido o expirado');
        
        // Si es el primer intento, intentar una vez más sin token
        if (retryCount === 0) {
          console.log('Primer intento falló con 401, intentando sin token...');
          localStorage.removeItem('token');
          return await fetchProductos(1);
        }
        
        // Si falla la autenticación, limpiar localStorage y redirigir
        console.log('Error 401 - Limpiando localStorage');
        localStorage.removeItem('token');
        throw new Error('No estás autenticado. Inicia sesión nuevamente.');
      }
      throw new Error(`Error al obtener productos: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Productos obtenidos exitosamente:', data);
    console.log('Cantidad de productos:', data.length || 0);
    return data;
  } catch (error) {
    console.error('Error detallado en fetchProductos:', error);
    console.error('Stack trace:', error.stack);
    
    // Si es el primer intento y hay error, intentar una vez más
    if (retryCount === 0) {
      console.log('Primer intento falló, intentando una vez más...');
      return await fetchProductos(1);
    }
    
    return [];
  }
};

// Función para organizar productos por categoría
const organizarProductosPorCategoria = (productos) => {
  console.log('=== ORGANIZANDO PRODUCTOS ===');
  console.log('Productos recibidos:', productos);
  
  const productosPorCategoria = {
    "bebidas-frias": [],
    "bebidas-calientes": [],
    "postres-frios": [],
    "postres-calientes": [],
    "platillos-especiales": [],
    "platillos-tradicionales": []
  };

  // Mapeo de categorías del backend a claves del frontend
  const mapeoCategoriasBackend = {
    "Bebidas Frias": "bebidas-frias",
    "Bebidas Calientes": "bebidas-calientes",
    "Postres Frios": "postres-frios",
    "Postres Calientes": "postres-calientes",
    "Platillos Especiales": "platillos-especiales",
    "Platillos Tradicionales": "platillos-tradicionales"
  };

  // Mapeo manual por nombre de producto (fallback)
  const mapeoProductos = {
    "Cafe Helado": "bebidas-frias",
    "Limonada": "bebidas-frias", 
    "Te Helado": "bebidas-frias",
    "Cafe": "bebidas-calientes",
    "Cafe Especial": "bebidas-calientes",
    "Latte Cremoso": "bebidas-calientes",
    "Helado": "postres-frios",
    "Pay de Fresa": "postres-frios",
    "Pay de Limon": "postres-frios",
    "Galletas": "postres-calientes",
    "Hotcakes": "postres-calientes",
    "Waflez": "postres-calientes",
    "Lasaña": "platillos-especiales",
    "Pizza Margarita": "platillos-especiales",
    "Sushi": "platillos-especiales",
    "Chilaquiles Rojos": "platillos-tradicionales",
    "Chilaquiles Verdes": "platillos-tradicionales",
    "Huevo Mexicano": "platillos-tradicionales"
  };

  productos.forEach(producto => {
    console.log('Procesando producto:', producto.name);
    console.log('Categoría del backend:', producto.category?.name);
    
    // Primero intentar usar la categoría del backend
    let categoryKey = null;
    
    if (producto.category && producto.category.name) {
      categoryKey = mapeoCategoriasBackend[producto.category.name];
      console.log(`Usando categoría del backend: "${producto.category.name}" -> "${categoryKey}"`);
    }
    
    // Si no funciona, usar el mapeo manual por nombre
    if (!categoryKey) {
      categoryKey = mapeoProductos[producto.name];
      console.log(`Usando mapeo manual: "${producto.name}" -> "${categoryKey}"`);
    }
    
    if (categoryKey && productosPorCategoria[categoryKey]) {
      const productoFormateado = {
        id: producto.id,
        nombre: producto.name,
        precio: producto.price,
        imagen: producto.urlImage,
        descripcion: producto.description,
        stock: producto.stock,
        categoria: producto.category?.name || producto.name
      };
      
      productosPorCategoria[categoryKey].push(productoFormateado);
      console.log(`✅ Producto "${producto.name}" agregado a "${categoryKey}"`);
    } else {
      console.warn(`❌ Producto "${producto.name}" no tiene mapeo de categoría`);
      console.warn('Categoría del backend:', producto.category?.name);
    }
  });

  console.log('Productos organizados:', productosPorCategoria);
  return productosPorCategoria;
};

const PaginaProductos = () => {
  // Estados
  const [subcatActiva, setSubcatActiva] = useState("bebidas-frias");
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productos, setProductos] = useState([]);
  const [productosPorCategoria, setProductosPorCategoria] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para verificar y guardar token de la URL
  const verificarTokenEnURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromURL = urlParams.get('token');
    
    if (tokenFromURL) {
      console.log('Token encontrado en URL, guardando en localStorage...');
      localStorage.setItem('token', tokenFromURL);
      
      // Limpiar la URL
      const newURL = window.location.pathname;
      window.history.replaceState({}, document.title, newURL);
      
      console.log('Token guardado y URL limpiada');
      return true;
    }
    return false;
  };

  // Cargar productos al montar el componente
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        console.log('=== INICIANDO CARGA DE PRODUCTOS ===');
        console.log('URL actual:', window.location.href);
        console.log('Cookies al entrar a tienda:', document.cookie);
        console.log('localStorage token:', localStorage.getItem('token'));
        
        // Verificar si hay token en la URL
        const tokenGuardado = verificarTokenEnURL();
        if (tokenGuardado) {
          console.log('Token guardado desde URL, continuando...');
        }
        
        // Verificar si hay alguna cookie específica
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
          const [name, value] = cookie.trim().split('=');
          console.log(`Cookie: ${name} = ${value}`);
        });
        
        const productosAPI = await fetchProductos();
        console.log('Productos recibidos de API:', productosAPI);
        
        const productosOrganizados = organizarProductosPorCategoria(productosAPI);
        console.log('Productos organizados:', productosOrganizados);
        
        setProductosPorCategoria(productosOrganizados);
        
        console.log('Subcategoría activa:', subcatActiva);
        console.log('Productos para subcategoría:', productosOrganizados[subcatActiva]);
        
        setProductos(productosOrganizados[subcatActiva] || []);
        setError(null);
      } catch (err) {
        setError('Error al cargar productos');
        console.error('Error al cargar productos:', err);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  // Actualizar productos cuando cambia la subcategoría
  useEffect(() => {
    if (productosPorCategoria[subcatActiva]) {
      setProductos(productosPorCategoria[subcatActiva]);
    }
  }, [subcatActiva, productosPorCategoria]);

  const handleAgregarProducto = (producto) => {
    console.log("Clic en agregar producto:", producto);
    console.log("Estado actual showModal:", showModal);
    setProductoSeleccionado(producto);
    setShowModal(true);
    console.log("Después de setShowModal(true)");
  };

  const handleCloseModal = () => {
    console.log("Cerrando modal");
    setShowModal(false);
    setProductoSeleccionado(null);
  };

  console.log("Renderizando PaginaProductos, showModal:", showModal, "productoSeleccionado:", productoSeleccionado);

  if (loading) {
    return (
      <div className="productos-layout">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh',
          fontSize: '18px',
          color: '#666'
        }}>
          Cargando productos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="productos-layout">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh',
          fontSize: '18px',
          color: '#d32f2f'
        }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="productos-layout">
      {/* Botón de debug temporal */}
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        zIndex: 1000,
        background: '#004aad',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '12px'
      }} onClick={() => {
        console.log('=== DEBUG INFO ===');
        console.log('localStorage token:', localStorage.getItem('token'));
        console.log('Cookies:', document.cookie);
        console.log('URL:', window.location.href);
        console.log('User Agent:', navigator.userAgent);
      }}>
        Debug Auth
      </div>
      
      <aside className="menu-categorias">
        <h2>Categorías</h2>
        {categorias.map((cat) => (
          <div key={cat.titulo} className="categoria-bloque">
            <div className="categoria-titulo">{cat.titulo}</div>
            <ul>
              {cat.subcategorias.map((sub) => (
                <li
                  key={sub.nombre}
                  className={`subcategoria-item${subcatActiva === sub.key ? " subcategoria-activa" : ""}`}
                  onClick={() => setSubcatActiva(sub.key)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={sub.icono} alt={sub.nombre} className="subcategoria-icono" />
                  {sub.nombre}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <main className="productos-main">
        <h1 className="productos-titulo">Productos</h1>
        {productos.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem',
            color: '#666',
            fontSize: '18px'
          }}>
            No hay productos disponibles en esta categoría
          </div>
        ) : (
          <div className="productos-grid">
            {(() => {
              console.log('=== RENDERIZANDO PRODUCTOS ===');
              console.log('Cantidad de productos:', productos.length);
              console.log('Productos a renderizar:', productos);
              return null;
            })()}
            {productos.map((prod) => (
              <div className="producto-card" key={prod.id || prod.nombre}>
                <div className="producto-img-wrap">
                  <img 
                    src={prod.imagen} 
                    alt={prod.nombre} 
                    className="producto-img"
                    onError={(e) => {
                      e.target.src = '/src/assets/tienda-productos/bebidad-calientes/cafe.jpg'; // Imagen por defecto
                    }}
                  />
                  <img 
                    src={botonMas} 
                    alt="Agregar" 
                    className="boton-mas-svg" 
                    onClick={() => handleAgregarProducto(prod)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="producto-nombre">{prod.nombre}</div>  
                <div className="producto-precio">${prod.precio.toFixed(2)}</div>
              </div>
            ))}
          </div>
        )}
      </main>
      {showModal && productoSeleccionado && (
        <ModalCarrito 
          producto={productoSeleccionado} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default PaginaProductos;
