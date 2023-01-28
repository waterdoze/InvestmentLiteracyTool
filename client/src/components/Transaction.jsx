import React from "react";

function Transaction(props) {
  return (
    <div>
      <input className="input" type="text" placeholder="Enter the amount of shares" />
        <button className="buy-sell" onClick={props.buy}>Buy</button>
        <button className="buy-sell" onClick={props.sell}>Sell</button>
    </div>
  );
}

export default Transaction;