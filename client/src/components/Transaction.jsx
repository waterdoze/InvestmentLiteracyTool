import React from "react";

function Transaction(props) {
  return (
    <div>
      <input type="text" placeholder="Enter the amount of shares" />
        <button onClick={props.buy}>Buy</button>
    </div>
  );
}

export default Transaction;