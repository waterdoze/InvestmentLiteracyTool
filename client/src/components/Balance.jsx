import React from "react";

function Balance(props) {
  return (
    <div className="balance-component">
      <h3 className="balance">Balance: $ {props.balance}</h3>
    </div>
  );
}

export default Balance;