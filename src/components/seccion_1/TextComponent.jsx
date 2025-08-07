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
                    <a className="btn btn-white" href='#conocenos'>Conocenos</a>
                    <a className="btn btn-orange" href='#menu'>Ver menú</a>
                </div>
            </div>
        </div>
    )
}
