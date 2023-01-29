import React from "react";

function Balance({balance, ownedStocks}) {
  return (
    <div className="balance-component">
      <h3 className="balance">Balance: $ {balance}</h3>
      <h3 className="owned-stocks">Owned Stocks: {ownedStocks} shares</h3>
    </div>
  );
}

export default Balance;