import imagenFondo from '../assets/cafeF.jpg';
const MenuCard = () => {
    return (
        <>
        <style>
                {`
                body {
                    background-image: url(${imagenFondo});
                    background-size: cover; 
                    background-position: center; 
                    background-repeat: no-repeat; 
                    background-attachment: fixed; 
                }
                 .menu-cards-container {
                        display: flex;
                        justify-content: center;
                        gap: 32px;
                        flex-wrap: wrap;
                    }
                    .menu-card {
                        background-color: rgba(0, 0, 0, 0.65);
                        padding: 32px 28px;
                        border-radius: 16px;
                        width: 420px;
                        color: #fff;
                        font-family: 'Segoe UI', Arial, sans-serif;
                        box-shadow: 0 4px 16px rgba(0,0,0,0.18);
                        margin: 40px auto;
                        position: relative;
                    }
                    .menu-title {
                        font-size: 1.1rem;
                        font-style: italic;
                        text-align: center;
                        margin-bottom: 8px;
                        opacity: 0.85;
                    }
                    .menu-header {
                        font-size: 2rem;
                        font-weight: bold;
                        margin-bottom: 24px;
                        text-align: center;
                    }
                    .menu-item-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 8px;
                    }
                    .menu-item-name {
                        font-weight: 600;
                        font-size: 1.15rem;
                    }
                    .menu-item-price {
                        font-weight: 500;
                        font-size: 1.1rem;
                        color: #dda15e;
                        margin-left: 12px;
                        position: relative;
                    }
                    .menu-item-price::before {
                        content: "$";
                        margin-right: 2px;
                    }
                    .menu-item-desc {
                        font-size: 0.97rem;
                        color: rgba(255, 255, 255, 0.35);
                        margin-bottom: 12px;
                        margin-right: 100px;
                    }
                    .menu-item-oldprice {
                        text-decoration: line-through;
                        color: rgba(255, 255, 255, 0.35);
                        font-size: 1rem;
                        margin-right: 6px;
                        position: relative;
                    }
                    .menu-item-oldprice::before {
                        content: "$";
                        margin-right: 2px;
                    }
                    .recommend-badge {
                        background: #bc6c25;
                        color: #ffffff;
                        border-radius: 8px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        padding: 2px 10px;
                        margin-left: 10px;
                    }
                    .menu-divider {
                        border: none;
                        border-top: 1px solid #333;
                        margin: 16px 0 12px 0;
                    }
                `}
            </style>
            <body>
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
            </body>
            
        </>
    );
};

export default MenuCard;