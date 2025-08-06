import './inicio_css/textComponent2.css'

export const TextComponent = () => {
    return (
        <div className="tienda-text-container">
            <div className="tienda-hero-bg">
                <h1 className="tienda-main-title">
                    Tienda Cafeteria Klang
                </h1>
                <div className="tienda-rectangulo"></div>
                <div className="tienda-welcome-text">
                    Lleva nuestra deliciosa experiencia a la puerta de tu casa
                </div>
                <div className="tienda-button-row">
                    <a className="tienda-btn tienda-btn-white" href='#conocenos'>Productos</a>
                    <a className="tienda-btn tienda-btn-orange" href='#menu'>Ver carrito</a>
                </div>
            </div>
        </div>
    )
}
