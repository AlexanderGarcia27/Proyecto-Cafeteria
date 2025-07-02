import imagenFondo from '../assets/imgF.jpg';
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
                        background-color: rgba(17, 13, 13, 0.5);
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
                        color: #ffb347;
                        margin-left: 12px;
                        position: relative;
                    }
                    .menu-item-price::before {
                        content: "$";
                        margin-right: 2px;
                    }
                    .menu-item-desc {
                        font-size: 0.97rem;
                        color: #ccc;
                        margin-bottom: 12px;
                        margin-right: 100px;
                    }
                    .menu-item-oldprice {
                        text-decoration: line-through;
                        color: #bbb;
                        font-size: 1rem;
                        margin-right: 6px;
                        position: relative;
                    }
                    .menu-item-oldprice::before {
                        content: "$";
                        margin-right: 2px;
                    }
                    .recommend-badge {
                        background: #ffb347;
                        color: #222;
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
                <div className="menu-title">Delicious Menu</div>
                <div className="menu-header">Breakfast</div>

                <div className="menu-item-row">
                    <span className="menu-item-name">Pancakes</span>
                    <span className="menu-item-price">12.50</span>
                </div>
                <div className="menu-item-desc">Fresh brewed coffee and steamed milk</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Toasted Waffle</span>
                    <span>
                        <span className="menu-item-oldprice">16.50</span>
                        <span className="menu-item-price">12.00</span>
                    </span>
                </div>
                <div className="menu-item-desc">Brewed coffee and steamed milk</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Fried Chips
                        <span className="recommend-badge">Recommend</span>
                    </span>
                    <span className="menu-item-price">15.0</span>
                </div>
                <div className="menu-item-desc">Rich Milk and Foam</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Pancakes</span>
                    <span className="menu-item-price">12.50</span>
                </div>
                <div className="menu-item-desc">Fresh brewed coffee and steamed milk</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Banana Cakes</span>
                    <span className="menu-item-price">18.0</span>
                </div>
                <div className="menu-item-desc">Rich Milk and Foam</div>
            </div>
            {/*card 2 xd*/}
            <div className="menu-card col-12 col-md-6 col-lg-4">
                <div className="menu-title">Delicious Menu</div>
                <div className="menu-header">Breakfast</div>

                <div className="menu-item-row">
                    <span className="menu-item-name">Pancakes</span>
                    <span className="menu-item-price">12.50</span>
                </div>
                <div className="menu-item-desc">Fresh brewed coffee and steamed milk</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Toasted Waffle</span>
                    <span>
                        <span className="menu-item-oldprice">16.50</span>
                        <span className="menu-item-price">12.00</span>
                    </span>
                </div>
                <div className="menu-item-desc">Brewed coffee and steamed milk</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Fried Chips
                        <span className="recommend-badge">Recommend</span>
                    </span>
                    <span className="menu-item-price">15.0</span>
                </div>
                <div className="menu-item-desc">Rich Milk and Foam</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Pancakes</span>
                    <span className="menu-item-price">12.50</span>
                </div>
                <div className="menu-item-desc">Fresh brewed coffee and steamed milk</div>
                <hr className="menu-divider" />

                <div className="menu-item-row">
                    <span className="menu-item-name">Banana Cakes</span>
                    <span className="menu-item-price">18.0</span>
                </div>
                <div className="menu-item-desc">Rich Milk and Foam</div>
            </div>
            </div>
            </body>
            
        </>
    );
};

export default MenuCard;