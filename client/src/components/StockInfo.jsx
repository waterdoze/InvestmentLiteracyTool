import React from "react";

function StockInfo({price, oldStock}) {
    return (
        <div className="stockinfo-component">
            <h1 className="stock-name">JPSE</h1>
            <h2 className="stock-price">{price} USD</h2>
            {price >= oldStock ?
                <h3 className="stock-difference">
                    {`+ ${(price - oldStock).toFixed(2)} (${((price - oldStock) / oldStock * 100).toFixed(2)}%) `} 
                    <i className="fa-solid fa-arrow-up" /></h3>
                : <h3 className="stock-difference">
                    {`- ${(oldStock - price).toFixed(2)} (${((price - oldStock) / oldStock * 100).toFixed(2)}%) `} 
                    <i className="fa-solid fa-arrow-up" /></h3>
            }
        </div>
    )
}

export default StockInfo;