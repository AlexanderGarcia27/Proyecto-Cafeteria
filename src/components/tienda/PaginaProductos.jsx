/**
 * PaginaProductos.jsx
 * Menú de categorías funcional, productos definidos en el mismo archivo.
 */
import React, { useState } from "react";
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

const productosPorCategoria = {
  "bebidas-frias": [
    { 
      nombre: "Café Helado", 
      precio: 45, 
      imagen: cafeHelado,
      descripcion: "Café negro refrescante servido con hielo, perfecto para los días calurosos. Preparado con granos selectos y un toque de dulzura natural."
    },
    { 
      nombre: "Limonada", 
      precio: 35, 
      imagen: limonada,
      descripcion: "Limonada natural preparada con limones frescos y un toque de menta. Refrescante y revitalizante, ideal para hidratarse."
    },
    { 
      nombre: "Té Helado", 
      precio: 38, 
      imagen: teHelado,
      descripcion: "Té negro infusionado en frío con un sutil toque de limón. Bebida ligera y refrescante con propiedades antioxidantes."
    },
  ],
  "bebidas-calientes": [
    { 
      nombre: "Latte Cremoso", 
      precio: 75, 
      imagen: latte,
      descripcion: "Café espresso con leche vaporizada y una suave capa de espuma. Perfecto balance entre el sabor del café y la cremosidad de la leche."
    },
    { 
      nombre: "Café", 
      precio: 59, 
      imagen: cafe,
      descripcion: "Café negro tradicional preparado con granos arábica selectos. Aroma intenso y sabor equilibrado para los amantes del café puro."
    },
    { 
      nombre: "Café Especial", 
      precio: 62, 
      imagen: cafe1,
      descripcion: "Nuestra mezcla especial de granos tostados a la perfección. Un café con cuerpo y aroma excepcionales, servido a la temperatura ideal."
    },
  ],
  "postres-frios": [
    { 
      nombre: "Helado", 
      precio: 40, 
      imagen: helado,
      descripcion: "Helado artesanal con sabores naturales. Cremoso y suave, perfecto para endulzar cualquier momento del día."
    },
    { 
      nombre: "Pay de Fresa", 
      precio: 48, 
      imagen: payFresa,
      descripcion: "Pay de fresa casero con base de galleta y crema de fresa natural. El equilibrio perfecto entre dulzura y frescura."
    },
    { 
      nombre: "Pay de Limón", 
      precio: 48, 
      imagen: payLimon,
      descripcion: "Pay de limón con base crujiente y relleno cremoso. Sabor cítrico refrescante que combina perfectamente con cualquier bebida."
    },
  ],
  "postres-calientes": [
    { 
      nombre: "Galletas", 
      precio: 30, 
      imagen: galletas,
      descripcion: "Galletas recién horneadas con chispas de chocolate. Crujientes por fuera y suaves por dentro, acompañadas de un toque de canela."
    },
    { 
      nombre: "Hotcakes", 
      precio: 55, 
      imagen: hotcakes,
      descripcion: "Hotcakes esponjosos servidos con mantequilla y jarabe de maple. Desayuno clásico que nunca falla para comenzar el día."
    },
    { 
      nombre: "Waflez", 
      precio: 50, 
      imagen: waflez,
      descripcion: "Waflez belga dorado y crujiente, servido con frutas frescas y crema batida. Textura perfecta y sabor inigualable."
    },
  ],
  "platillos-especiales": [
    { 
      nombre: "Lasaña", 
      precio: 90, 
      imagen: lasagna,
      descripcion: "Lasaña casera con capas de pasta, salsa boloñesa, queso mozzarella y bechamel. Horneada hasta obtener el punto perfecto de gratinado."
    },
    { 
      nombre: "Pizza Margarita", 
      precio: 85, 
      imagen: pizza,
      descripcion: "Pizza Margarita tradicional con masa artesanal, salsa de tomate, mozzarella fresca y albahaca. Cocida en horno de piedra para el sabor auténtico."
    },
    { 
      nombre: "Sushi", 
      precio: 110, 
      imagen: sushi,
      descripcion: "Sushi fresco preparado con arroz de primera calidad y pescado de mar. Variedad de sabores y texturas en cada pieza."
    },
  ],
  "platillos-tradicionales": [
    { 
      nombre: "Chilaquiles Rojos", 
      precio: 70, 
      imagen: chilaquilesRojos,
      descripcion: "Chilaquiles con salsa roja picante, tortillas crujientes, pollo deshebrado, crema y queso fresco. Desayuno mexicano por excelencia."
    },
    { 
      nombre: "Chilaquiles Verdes", 
      precio: 70, 
      imagen: chilaquilesVerdes,
      descripcion: "Chilaquiles con salsa verde de tomate, cebolla y chile serrano. Acompañados de pollo, crema y queso fresco para un sabor auténtico."
    },
    { 
      nombre: "Huevo Mexicano", 
      precio: 60, 
      imagen: huevoMex,
      descripcion: "Huevos estrellados con salsa de tomate, cebolla y chile. Servidos con frijoles refritos y tortillas calientes. Desayuno nutritivo y sabroso."
    },
  ],
};

const PaginaProductos = () => {
  // Estado para la subcategoría seleccionada
  const [subcatActiva, setSubcatActiva] = useState("bebidas-frias");
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  
  const productos = productosPorCategoria[subcatActiva] || [];

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
        <div className="productos-grid">
          {productos.map((prod) => (
            <div className="producto-card" key={prod.nombre}>
              <div className="producto-img-wrap">
                <img src={prod.imagen} alt={prod.nombre} className="producto-img" />
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
