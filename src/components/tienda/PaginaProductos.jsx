/**
 * PaginaProductos.jsx
 * Menú de categorías funcional, productos definidos en el mismo archivo.
 */
import React, { useState } from "react";
import "./PaginaProductos.css";
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
    { nombre: "Café Helado", precio: 45, imagen: cafeHelado },
    { nombre: "Limonada", precio: 35, imagen: limonada },
    { nombre: "Té Helado", precio: 38, imagen: teHelado },
  ],
  "bebidas-calientes": [
    { nombre: "Latte Cremoso", precio: 75, imagen: latte },
    { nombre: "Café", precio: 59, imagen: cafe },
    { nombre: "Café Especial", precio: 62, imagen: cafe1 },
  ],
  "postres-frios": [
    { nombre: "Helado", precio: 40, imagen: helado },
    { nombre: "Pay de Fresa", precio: 48, imagen: payFresa },
    { nombre: "Pay de Limón", precio: 48, imagen: payLimon },
  ],
  "postres-calientes": [
    { nombre: "Galletas", precio: 30, imagen: galletas },
    { nombre: "Hotcakes", precio: 55, imagen: hotcakes },
    { nombre: "Waflez", precio: 50, imagen: waflez },
  ],
  "platillos-especiales": [
    { nombre: "Lasaña", precio: 90, imagen: lasagna },
    { nombre: "Pizza Margarita", precio: 85, imagen: pizza },
    { nombre: "Sushi", precio: 110, imagen: sushi },
  ],
  "platillos-tradicionales": [
    { nombre: "Chilaquiles Rojos", precio: 70, imagen: chilaquilesRojos },
    { nombre: "Chilaquiles Verdes", precio: 70, imagen: chilaquilesVerdes },
    { nombre: "Huevo Mexicano", precio: 60, imagen: huevoMex },
  ],
};

const PaginaProductos = () => {
  // Estado para la subcategoría seleccionada
  const [subcatActiva, setSubcatActiva] = useState("bebidas-frias");
  const productos = productosPorCategoria[subcatActiva] || [];

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
                <img src={botonMas} alt="Agregar" className="boton-mas-svg" />
              </div>
              <div className="producto-nombre">{prod.nombre}</div>
              <div className="producto-precio">${prod.precio.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PaginaProductos;
