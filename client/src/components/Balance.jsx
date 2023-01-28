import React from "react";

function Balance({balance}) {
  return (
    <div className="balance">
      <h3>Balance</h3>
      <p>${balance}</p>
    </div>
  );
}

export default Balance;