import React, { useState } from 'react'
import "./css/productos.css";
import { NavbarInicio } from './navbarInicio'
import ModalAgregarStock from './ModalAgregarStock'

// Importar imágenes de todas las categorías
// Bebidas calientes
import latte from '../../../assets/tienda-productos/bebidad-calientes/latte.jpg';
import cafe from '../../../assets/tienda-productos/bebidad-calientes/cafe.jpg';
import cafe1 from '../../../assets/tienda-productos/bebidad-calientes/cafe1.jpg';

// Bebidas frías
import cafeHelado from '../../../assets/tienda-productos/bebidas-frias/cafe-helado.jpg';
import limonada from '../../../assets/tienda-productos/bebidas-frias/limonada.jpg';
import teHelado from '../../../assets/tienda-productos/bebidas-frias/te-helado.jpg';

// Postres fríos
import helado from '../../../assets/tienda-productos/postres-frios/helado.jpg';
import payFresa from '../../../assets/tienda-productos/postres-frios/pay-fresa.jpg';
import payLimon from '../../../assets/tienda-productos/postres-frios/pay-limon.jpg';

// Postres calientes
import galletas from '../../../assets/tienda-productos/postres-calientes/galletas.jpg';
import hotcakes from '../../../assets/tienda-productos/postres-calientes/hotcakes.jpg';
import waflez from '../../../assets/tienda-productos/postres-calientes/waflez.jpg';

// Platillos especiales
import lasagna from '../../../assets/tienda-productos/platillos-especiales/lazaña.jpg';
import pizza from '../../../assets/tienda-productos/platillos-especiales/pizza-margarita.jpg';
import sushi from '../../../assets/tienda-productos/platillos-especiales/sushi.jpg';

// Platillos tradicionales
import chilaquilesRojos from '../../../assets/tienda-productos/platillos-tradicionales/chilaquiles-rojos.jpg';
import chilaquilesVerdes from '../../../assets/tienda-productos/platillos-tradicionales/chilaquiles-verdes.jpg';
import huevoMex from '../../../assets/tienda-productos/platillos-tradicionales/huevo-mex.jpg';

// Datos de productos por categoría
const productosPorCategoria = {
  'bebidas-calientes': [
    { nombre: 'Latte Cremoso', precio: '75.00', stock: '50', imagen: latte },
    { nombre: 'Café Americano', precio: '45.00', stock: '30', imagen: cafe },
    { nombre: 'Café Especial', precio: '65.00', stock: '25', imagen: cafe1 }
  ],
  'bebidas-frias': [
    { nombre: 'Café Helado', precio: '55.00', stock: '40', imagen: cafeHelado },
    { nombre: 'Limonada', precio: '35.00', stock: '60', imagen: limonada },
    { nombre: 'Té Helado', precio: '40.00', stock: '35', imagen: teHelado }
  ],
  'postres-frios': [
    { nombre: 'Helado', precio: '25.00', stock: '20', imagen: helado },
    { nombre: 'Pay de Fresa', precio: '45.00', stock: '15', imagen: payFresa },
    { nombre: 'Pay de Limón', precio: '45.00', stock: '18', imagen: payLimon }
  ],
  'postres-calientes': [
    { nombre: 'Galletas', precio: '30.00', stock: '25', imagen: galletas },
    { nombre: 'Hotcakes', precio: '50.00', stock: '12', imagen: hotcakes },
    { nombre: 'Waffles', precio: '55.00', stock: '10', imagen: waflez }
  ],
  'platillos-especiales': [
    { nombre: 'Lasaña', precio: '120.00', stock: '8', imagen: lasagna },
    { nombre: 'Pizza Margarita', precio: '150.00', stock: '6', imagen: pizza },
    { nombre: 'Sushi', precio: '180.00', stock: '5', imagen: sushi }
  ],
  'platillos-tradicionales': [
    { nombre: 'Chilaquiles Rojos', precio: '80.00', stock: '15', imagen: chilaquilesRojos },
    { nombre: 'Chilaquiles Verdes', precio: '80.00', stock: '12', imagen: chilaquilesVerdes },
    { nombre: 'Huevo Mexicano', precio: '65.00', stock: '20', imagen: huevoMex }
  ]
};

// Componente individual de la tarjeta de producto (Product Card)
const ProductoCard = ({ producto, onAgregarStock }) => (
    <div className="tienda-product-card">
        <div className="tienda-product-image-container">
            <img src={producto.imagen} alt={producto.nombre} className="tienda-product-image" />
            <div 
                className="tienda-add-button"
                onClick={() => onAgregarStock(producto)}
            >
                +
            </div>
        </div>
        <p className="tienda-product-name">Nombre: {producto.nombre}</p>
        <p className="tienda-product-price">Precio: $ {producto.precio}</p>
        <p className="tienda-product-stock">Stock: {producto.stock}</p>
    </div>
);

export default function Productos() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('bebidas-calientes');
    const [modalAbierto, setModalAbierto] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const categorias = [
        { key: 'bebidas-calientes', nombre: 'Bebidas Calientes' },
        { key: 'bebidas-frias', nombre: 'Bebidas Frías' },
        { key: 'postres-frios', nombre: 'Postres Fríos' },
        { key: 'postres-calientes', nombre: 'Postres Calientes' },
        { key: 'platillos-especiales', nombre: 'Platillos Especiales' },
        { key: 'platillos-tradicionales', nombre: 'Platillos Tradicionales' }
    ];

    const productosActuales = productosPorCategoria[categoriaSeleccionada] || [];

    const handleAgregarStock = (producto) => {
        setProductoSeleccionado(producto);
        setModalAbierto(true);
    };

    const handleCerrarModal = () => {
        setModalAbierto(false);
        setProductoSeleccionado(null);
    };

    return (
        <div className="productos-container">
            <div className="admin-productos-layout">
                <NavbarInicio />
                
                {/* Filtro de categorías */}
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
                
                {/* Grid de productos */}
                <div className="productos-grid">
                    {productosActuales.map((producto, index) => (
                        <ProductoCard 
                            key={index}
                            producto={producto}
                            onAgregarStock={handleAgregarStock}
                        />
                    ))}
                </div>
                
                {/* Modal de agregar stock */}
                {modalAbierto && productoSeleccionado && (
                    <ModalAgregarStock 
                        producto={productoSeleccionado}
                        onClose={handleCerrarModal}
                    />
                )}
            </div>
        </div>
    )
}