import React from "react";

function StockInfo({price}) {
    
    return (
        <div className="stockinfo-component">
            <h1 className="stock-name">JPSE</h1>
            <h2 className="stock-price">{price} USD</h2>
        </div>
    )
}

export default StockInfo;