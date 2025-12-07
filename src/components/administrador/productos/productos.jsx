import React, { useState, useEffect } from 'react';
import "./css/productos.css";
import { NavbarInicio } from './navbarInicio';
import ModalAgregarStock from './ModalAgregarStock';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


// ⚡ Función para obtener productos desde API
const fetchProductos = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("https://proyecto-cafeteria-lm3l.onrender.com/api/products", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });

    if (!res.ok) throw new Error("Error al cargar productos");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

// ⚡ Organización como en PaginaProductos.jsx
const organizarProductosPorCategoria = (productos) => {

  const productosPorCategoria = {
    "bebidas-calientes": [],
    "bebidas-frias": [],
    "postres-frios": [],
    "postres-calientes": [],
    "platillos-especiales": [],
    "platillos-tradicionales": []
  };

  const mapeo = {
    "Bebidas Frias": "bebidas-frias",
    "Bebidas Calientes": "bebidas-calientes",
    "Postres Frios": "postres-frios",
    "Postres Calientes": "postres-calientes",
    "Platillos Especialidades": "platillos-especiales",
    "Platillos Tradicionales": "platillos-tradicionales"
  };

  productos.forEach(p => {
    const categoriaKey = mapeo[p.category?.name];
    if (categoriaKey) {
      productosPorCategoria[categoriaKey].push({
        id: p.id,
        nombre: p.name,
        precio: p.price,
        stock: p.stock,
        imagen: p.urlImage,
        descripcion: p.description,
        categoryId: p.category?.id // ← IMPORTANTE
      });

    }
  });

  return productosPorCategoria;
};

// 🧩 Tarjeta de producto admin
const ProductoCard = ({ producto, onAgregarStock, onEliminar, onActualizar }) => (
  <div className="tienda-product-card">
    <div className="tienda-product-image-container">
      <img src={producto.imagen} alt={producto.nombre} className="tienda-product-image" />
      <div className="tienda-add-button" onClick={() => onAgregarStock(producto)}>
        +
      </div>
    </div>

    <p className="tienda-product-name">Nombre: {producto.nombre}</p>
    <p className="tienda-product-stock">Descripción: {producto.descripcion}</p>
    <p className="tienda-product-price">Precio: $ {producto.precio}</p>
    <p className="tienda-product-stock">Stock: {producto.stock}</p>

    {/* 🔹 Botones de acción */}
    <button className="btn-actualizar" onClick={() => onActualizar(producto)}>
      Actualizar
    </button>

    <button className="btn-eliminar" onClick={() => onEliminar(producto.id)}>
      Eliminar
    </button>
  </div>
);


export default function Productos() {
  const navigate = useNavigate();

  const handleActualizarProducto = (producto) => {
    navigate("/administrador-actualizar-producto", {
      state: { producto: producto }
    });
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("bebidas-calientes");
  const [productosPorCategoria, setProductosPorCategoria] = useState({});
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [loading, setLoading] = useState(true);

  const categorias = [
    { key: 'bebidas-calientes', nombre: 'Bebidas Calientes' },
    { key: 'bebidas-frias', nombre: 'Bebidas Frías' },
    { key: 'postres-frios', nombre: 'Postres Fríos' },
    { key: 'postres-calientes', nombre: 'Postres Calientes' },
    { key: 'platillos-especiales', nombre: 'Platillos Especiales' },
    { key: 'platillos-tradicionales', nombre: 'Platillos Tradicionales' }
  ];

  const cargarProductos = async () => {
    setLoading(true);
    const data = await fetchProductos();
    const organizados = organizarProductosPorCategoria(data);
    setProductosPorCategoria(organizados);
    setLoading(false);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const productosActuales = productosPorCategoria[categoriaSeleccionada] || [];

  const handleAgregarStock = (producto) => {
    setProductoSeleccionado(producto);
    setModalAbierto(true);
  };

  // 🗑️ Función para eliminar producto
  const handleEliminarProducto = async (id) => {
    const token = localStorage.getItem("token");

    Swal.fire({
      icon: "warning",
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`https://proyecto-cafeteria-lm3l.onrender.com/api/products/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (!res.ok) throw new Error("Error al eliminar producto");

          Swal.fire({
            icon: "success",
            title: "Eliminado",
            text: "El producto fue eliminado con éxito"
          });

          // 🔄 Recargar lista
          cargarProductos();

        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo eliminar el producto"
          });
        }
      }
    });
  };

  return (
    <div className="productos-container">
      <div className="admin-productos-layout">
        <NavbarInicio />

        <div className="filtro-categorias">
          <div className="categoria-buttons">
            {categorias.map((categoria) => (
              <button
                key={categoria.key}
                className={`categoria-btn ${categoriaSeleccionada === categoria.key ? 'active' : ''}`}
                onClick={() => setCategoriaSeleccionada(categoria.key)}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <p style={{ textAlign: "center", padding: "2rem" }}>Cargando productos...</p>
        ) : (
          <div className="productos-grid">
            {productosActuales.length > 0 ? (
              productosActuales.map((prod) => (
                <ProductoCard
                  key={prod.id}
                  producto={prod}
                  onAgregarStock={handleAgregarStock}
                  onEliminar={handleEliminarProducto}
                  onActualizar={handleActualizarProducto} // ⬅️ Aquí
                />
              ))

            ) : (
              <p style={{ width: "100%", textAlign: "center" }}>
                No hay productos en esta categoría
              </p>
            )}
          </div>
        )}

        {modalAbierto && productoSeleccionado && (
          <ModalAgregarStock producto={productoSeleccionado} onClose={() => setModalAbierto(false)} />
        )}
      </div>
    </div>
  );
}
