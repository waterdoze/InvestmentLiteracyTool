import React from "react";

function Balance({balance}) {
  return (
    <div className="balance-component">
      <h3 className="balance">Balance: $ {balance}</h3>
    </div>
  );
}

export default Balance;