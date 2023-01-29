import React from "react";

function Transaction({setBalance, balance, currPrice}) {

  const [input, setInput] = React.useState("");

  function buy() {
    try{
      if (input <= 0) {
        throw "Invalid input";
      }
      setBalance(balance - (parseInt(input) * currPrice));
    }
    catch(err){
      console.log(err);
    }
  }
  function sell(){
    try{
      if (input <= 0) {
        throw "Invalid input";
      }
      setBalance(balance + (parseInt(input) * currPrice));
    }
    catch(err){
      console.log(err);
    }
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