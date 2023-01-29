import React from "react";

function StockInfo({price}) {
    
    return (
        <div>
            <h1>Stock</h1>
            <h2>{price}</h2>
        </div>
    )
}

export default StockInfo;