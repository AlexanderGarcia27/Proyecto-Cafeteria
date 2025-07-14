import '../css/seccion_1/textComponent.css'

export const TextComponent = () => {
    return (
        <div className="text-container">
            <div className="hero-bg">
                <div className="welcome-text">Bienvenidos a Baristas.com</div>
                <h1 className="main-title">
                    Café Klang
                </h1>
                <div className="rectangulo"></div>
                <div className="subtitle">
                    Tu café  <span className="italic">favorito</span> para el día a día.
                </div>
                <div className="button-row">
                    <button className="btn btn-white">Conocenos</button>
                    <button className="btn btn-orange">Ver menú</button>
                </div>
            </div>
        </div>
    )
}
