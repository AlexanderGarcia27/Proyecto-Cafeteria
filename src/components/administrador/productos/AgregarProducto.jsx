import React, { useState } from "react";
import "./css/agregarProducto.css";
import { useNavigate } from "react-router-dom";


export default function AgregarProducto() {
  const navigate = useNavigate();
  const handleCancelar = () => {
    navigate("/administrador-productos");
  };

  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    stock: "",
    imagen: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleImagen = (e) => {
    setProducto({ ...producto, imagen: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(producto);
  };

  return (
    <div className="agregar-container">
      <div className="agregar-card">

        <h1 className="agregar-title">Bienvenido</h1>
        <p className="agregar-subtitle">Registra un producto</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label className="form-label">Nombre del producto</label>
            <input
              type="text"
              name="nombre"
              className="form-input"
              placeholder="Nombre del producto"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Descripción del producto</label>
            <textarea
              name="descripcion"
              className="form-textarea"
              placeholder="Descripción del producto"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Selecciona categoría</label>
            <select
              name="categoria"
              className="form-select"
              onChange={handleChange}
            >
              <option value="">Selecciona Categoría</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Snacks">Snacks</option>
              <option value="Lácteos">Lácteos</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Precio</label>
            <input
              type="number"
              name="precio"
              className="form-input"
              placeholder="Precio"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Stock Inicial</label>
            <input
              type="number"
              name="stock"
              className="form-input"
              placeholder="Stock inicial"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Imagen del producto</label>
            <input
              type="file"
              className="form-file"
              onChange={handleImagen}
            />
          </div>
        </form>

        <div className="botonera">
          <button className="btn-cancelar" onClick={handleCancelar}>
            Cancelar
          </button>
          <button className="btn-registrar" onClick={handleSubmit}>Registrar</button>
        </div>

      </div>
    </div>
  );
}
