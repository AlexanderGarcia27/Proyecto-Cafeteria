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

// Función para obtener productos desde la API
const fetchProductos = async () => {
  try {
    console.log('Intentando obtener productos...');
    console.log('Cookies disponibles:', document.cookie);
    
    const token = localStorage.getItem('token');
    console.log('Token en localStorage:', token ? 'Encontrado' : 'No encontrado');
    
    const headers = {
      'Content-Type': 'application/json',
    };
    
    // Si tenemos token en localStorage, lo usamos en el header Authorization
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      console.log('Enviando token en Authorization header');
    }
    
    const response = await fetch('https://reservacion-citas.onrender.com/api/products', {
      method: 'GET',
      credentials: 'include', // También intentamos con cookies
      headers,
    });
    
    console.log('Status de respuesta:', response.status);
    console.log('URL de la petición:', response.url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.log('Respuesta de error:', errorText);
      
      if (response.status === 401) {
        // Si falla la autenticación, limpiar localStorage y redirigir
        localStorage.removeItem('token');
        throw new Error('No estás autenticado. Inicia sesión nuevamente.');
      }
      throw new Error(`Error al obtener productos: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Productos obtenidos:', data);
    return data;
  } catch (error) {
    console.error('Error detallado:', error);
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

  // Cargar productos al montar el componente
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        console.log('=== INICIANDO CARGA DE PRODUCTOS ===');
        console.log('URL actual:', window.location.href);
        console.log('Cookies al entrar a tienda:', document.cookie);
        console.log('localStorage token:', localStorage.getItem('token'));
        
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