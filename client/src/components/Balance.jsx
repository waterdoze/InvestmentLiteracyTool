import React from "react";

function Balance(props) {
  return (
    <div className="balance">
      <h3>Balance</h3>
      <p>${props.balance}</p>
    </div>
  );
}

export default Balance;