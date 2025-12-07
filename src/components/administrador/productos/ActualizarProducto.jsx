import React, { useState, useEffect } from "react";
import "./css/agregarProducto.css";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function ActualizarProducto() {
    const navigate = useNavigate();
    const location = useLocation();
    const productoEditar = location.state?.producto;

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

    // 🔹 Rellenar datos del producto a editar
    useEffect(() => {
        if (productoEditar) {
            setProducto({
                nombre: productoEditar.nombre,
                descripcion: productoEditar.descripcion,
                categoryId: productoEditar.categoryId || categorias[0].id,
                precio: productoEditar.precio,
                stock: productoEditar.stock, // se mantiene pero no se envía
                imagen: null,
            });
        }
    }, [productoEditar]);

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
        if (!producto.nombre.trim()) return "Ingresa un nombre de producto";
        if (!producto.descripcion.trim()) return "Ingresa una descripción";
        if (!producto.categoryId) return "Selecciona una categoría";
        if (!producto.precio || producto.precio <= 0) return "Ingresa un precio válido";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validarCampos();
        if (error) return Swal.fire("Error", error, "error");

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return Swal.fire("Error", "Por favor inicia sesión nuevamente", "error");
            }

            // 🔹 Campos seguros, sin stock
            const name = producto.nombre || productoEditar.nombre;
            const description = producto.descripcion || productoEditar.descripcion;
            const categoryId = producto.categoryId || productoEditar.categoryId || categorias[0].id;

            const plainText = JSON.stringify({
                name,
                description,
                price: Number(producto.precio),
                categoryId,
            });

            const formData = new FormData();
            formData.append("product", plainText);
            if (producto.imagen) formData.append("file", producto.imagen);

            console.log("JSON enviado:", plainText);

            const res = await fetch(
                `https://proyecto-cafeteria-lm3l.onrender.com/api/products/${productoEditar.id}`,
                {
                    method: "PATCH",
                    headers: { Authorization: `Bearer ${token}` },
                    body: formData,
                }
            );

            if (!res.ok) throw new Error("Error al actualizar producto");

            Swal.fire("Éxito", "Producto actualizado correctamente", "success").then(() =>
                navigate("/administrador-productos")
            );
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "No se pudo actualizar el producto", "error");
        }
    };

    return (
        <div className="agregar-container">
            <div className="agregar-card">
                <h1 className="agregar-title">Editar producto</h1>
                <p className="agregar-subtitle">Actualiza los datos</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Nombre del producto</label>
                        <input
                            type="text"
                            name="nombre"
                            className="form-input"
                            value={producto.nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Descripción del producto</label>
                        <textarea
                            name="descripcion"
                            className="form-textarea"
                            value={producto.descripcion}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Categoría</label>
                        <select
                            name="categoryId"
                            value={producto.categoryId}
                            onChange={handleChange}
                            className="form-input"
                        >
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
                        <input
                            type="number"
                            name="precio"
                            className="form-input"
                            value={producto.precio}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Nueva imagen (opcional)</label>
                        <input type="file" className="form-file" onChange={handleImagen} />
                    </div>
                </form>

                <div className="botonera">
                    <button className="btn-cancelar" onClick={handleCancelar}>
                        Cancelar
                    </button>
                    <button className="btn-registrar" onClick={handleSubmit}>
                        Actualizar
                    </button>
                </div>
            </div>
        </div>
    );
}
