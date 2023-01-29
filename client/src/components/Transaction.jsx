import React from "react";

function Transaction({setBalance, balance, currPrice, ownedStocks, setOwnedStocks}) {

  const [input, setInput] = React.useState("");

  function buy() {
    try {
      let val = parseInt(input);
      let bal = parseInt(balance);
      if (val <= 0) {throw Error("Invalid input");}
      else if (balance < val * currPrice) {throw Error("You don't have enough money to buy");}

      setBalance((bal - val * currPrice).toFixed(2));
      setOwnedStocks(ownedStocks + val);
    } 
    catch (err) {console.log(err);}
  }

  function sell() {
    try {
      let val = parseInt(input);
      let bal = parseInt(balance);
      if (val <= 0) {throw Error("Invalid input");}
      else if (val > ownedStocks) {throw Error("You don't have enough stocks to sell");}
      setBalance((bal + val * currPrice).toFixed(2));
      setOwnedStocks(ownedStocks - val);
    } 
    catch (err) {console.log(err);}
  }

  return (
    <div className="transaction-component">
      <input className="input" type="text" placeholder="Enter the amount of shares" value={input} onInput={e => setInput(e.target.value)}/>
      <button className="buy-sell" onClick={buy}>Buy</button>
      <button className="buy-sell" onClick={sell} >Sell</button>
    </div>
  );
}

export default Transaction;