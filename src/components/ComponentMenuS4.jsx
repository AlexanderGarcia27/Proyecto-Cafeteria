import imagenFondo from '../assets/cafeF.jpg';
import './menu.css';
const MenuCard = () => {
    return (
        <>
        <style>
            {`
            .menuXD {
                background-image: url(${imagenFondo});
                background-size: cover; 
                background-position: center; 
                background-repeat: no-repeat; 
                background-attachment: fixed; 
                width: 100%;
            }
            `}
        </style>
            <div className="menuXD">
                <div className="menu-cards-container">
                {/*card 1 xd*/}
            <div className="menu-card col-12 col-md-6 col-lg-4">
                <div className="menu-title">Nuestro delicioso Menú</div>
                <div className="menu-header">Desayuno</div>

                <div className="menu-item-row">
                    <span className="menu-item-name">Hot Cakes Esponjosos</span>
                    <span className="menu-item-price">125.00</span>
                </div>
                <div className="menu-item-desc">Acompañados de miel de maple y un toque de mantequilla.</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Waffle Tostado con Fruta</span>
                    <span>
                        <span className="menu-item-oldprice">180.00</span>
                        <span className="menu-item-price">165.00</span>
                    </span>
                </div>
                <div className="menu-item-desc">Waffle crujiente con frutos rojos frescos y jarabe de agave.</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name"> Chilaquiles Rojos o Verdes
                        <span className="recommend-badge">Recommend</span>
                    </span>
                    <span className="menu-item-price">150.00</span>
                </div>
                <div className="menu-item-desc"> Totopos bañados en salsa, crema, queso, cebolla y aguacate.</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Huevos al Gusto</span>
                    <span className="menu-item-price">125.00</span>
                </div>
                <div className="menu-item-desc">Revueltos, estrellados o con jamón, acompañados de frijoles.</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Pan Francés con Canela</span>
                    <span className="menu-item-price">180.00</span>
                </div>
                <div className="menu-item-desc">Rebanadas de pan brioche con canela y azúcar glass.</div>
            </div>
            {/*card 2 xd*/}
            <div className="menu-card col-12 col-md-6 col-lg-4">
                <div className="menu-title">Nuestro Menú Favorito</div>
                <div className="menu-header">Café</div>

                <div className="menu-item-row">
                    <span className="menu-item-name">Latte Cremoso</span>
                    <span className="menu-item-price">75.00</span>
                </div>
                <div className="menu-item-desc">Café recién preparado con leche vaporizada.</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Chocolate Oscuro Intenso</span>
                    <span>
                        <span className="menu-item-oldprice">85.00</span>
                        <span className="menu-item-price">72.00</span>
                    </span>
                </div>
                <div className="menu-item-desc">Chocolate rico con leche y espuma, para los amantes del cacao puro.</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Café con Leche Clásico 
                        <span className="recommend-badge">Recommend</span>
                    </span>
                    <span className="menu-item-price">59.00</span>
                </div>
                <div className="menu-item-desc"> Café recién preparado con leche vaporizada, un equilibrio perfecto.</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Chocolate Caliente con Leche</span>
                    <span className="menu-item-price">55.00</span>
                </div>
                <div className="menu-item-desc">Leche rica y espumosa con cacao.</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Té Verde Premium</span>
                    <span className="menu-item-price">75.00</span>
                </div>
                <div className="menu-item-desc">Selección especial de té verde, infusión aromática.</div>
            </div>
            </div>
            </div>
            
        </>
    );
};

export default MenuCard;