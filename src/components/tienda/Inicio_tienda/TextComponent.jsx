import './seccion_1/textComponent.css'

export const TextComponent = () => {
    return (
        <div className="text-container">
            <div className="hero-bg">
                <h1 className="main-title">
                    Tienda Cafeteria Klang
                </h1>
                <div className="rectangulo"></div>
                <div className="welcome-text">
                    Lleva nuestra deliciosa experiencia a la puerta de tu casa
                </div>
                <div className="button-row">
                    <a className="btn btn-white" href='#conocenos'>Productos</a>
                    <a className="btn btn-orange" href='#menu'>Ver carrito</a>
                </div>
            </div>
        </div>
    )
}
