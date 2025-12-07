import React, { useState } from "react";
import "./css/agregarProducto.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AgregarProducto() {
  const navigate = useNavigate();

  const categorias = [
    { id: "63dbb400-a71b-4828-8651-f333ac57633c", name: "Bebidas Frias" },
    { id: "2f22599a-f4d8-401b-bca5-6a7721d15600", name: "Bebidas Calientes" },
    { id: "bb0a1999-afbc-4c7d-bb67-07635af9fd32", name: "Postres Frios" },
    { id: "90177398-d925-4d73-9758-5f80ac134b45", name: "Postres Calientes" },
    { id: "c8ebb244-c767-418c-a0d9-876b6b5f7cad", name: "Platillos Especialidades" },
    { id: "f5599a69-9115-4b5e-b0d1-35e503c0abb9", name: "Platillos Tradicionales" },
  ];

  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    categoryId: "",
    precio: "",
    stock: "",
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleImagen = (e) => {
    setProducto({ ...producto, imagen: e.target.files[0] });
  };

  const handleCancelar = () => {
    navigate("/administrador-productos");
  };

  const validarCampos = () => {
    if (!producto.nombre.trim())
      return "Ingresa un nombre de producto";
    if (!producto.descripcion.trim())
      return "Ingresa una descripción";
    if (!producto.categoryId)
      return "Selecciona una categoría";
    if (!producto.precio || producto.precio <= 0)
      return "Ingresa un precio mayor a 0";
    if (!producto.stock || producto.stock < 0)
      return "Ingresa un stock válido";
    if (!producto.imagen)
      return "Selecciona una imagen";

    return null; // Todo correcto
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔹 Validación antes de mandar la petición
    const errorValidacion = validarCampos();
    if (errorValidacion) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: errorValidacion,
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Token no encontrado",
          text: "Por favor inicia sesión nuevamente",
        });
        return;
      }

      const formData = new FormData();
      formData.append(
        "product",
        `{"stock": ${producto.stock}, "price": ${producto.precio}, "name": "${producto.nombre}", "description": "${producto.descripcion}", "categoryId": "${producto.categoryId}"}`
      );

      if (producto.imagen) {
        formData.append("file", producto.imagen);
      }

      const res = await fetch(
        "https://proyecto-cafeteria-lm3l.onrender.com/api/products",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!res.ok) {
        console.error("STATUS:", res.status);
        throw new Error("Error al registrar producto");
      }

      Swal.fire({
        icon: "success",
        title: "¡Producto agregado!",
        text: "El producto se registró correctamente",
        confirmButtonText: "Aceptar",
      }).then(() => {
        navigate("/administrador-productos");
      });

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema al registrar el producto",
      });
    }
  };

  return (
    <div className="agregar-container">
      <div className="agregar-card">

        <h1 className="agregar-title">Bienvenido</h1>
        <p className="agregar-subtitle">Registra un producto</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nombre del producto</label>
            <input type="text" name="nombre" className="form-input" onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label className="form-label">Descripción del producto</label>
            <textarea name="descripcion" className="form-textarea" onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label className="form-label">Categoría</label>
            <select name="categoryId" className="form-select" onChange={handleChange}>
              <option value="">Selecciona una categoría</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Precio</label>
            <input type="number" name="precio" className="form-input" onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label className="form-label">Stock Inicial</label>
            <input type="number" name="stock" className="form-input" onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label className="form-label">Imagen del producto</label>
            <input type="file" className="form-file" onChange={handleImagen}/>
          </div>
        </form>

        <div className="botonera">
          <button className="btn-cancelar" onClick={handleCancelar}>Cancelar</button>
          <button className="btn-registrar" onClick={handleSubmit}>Registrar</button>
        </div>

      </div>
    </div>
  );
}
