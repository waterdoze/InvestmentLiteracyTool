import React from "react";

function Transaction({setBalance, balance, currPrice}) {

  const [input, setInput] = React.useState(0);

  function buy() {
    /*check if less than </= 0*/
    
    try{
      console.log(typeof(input),"Test1")
      console.log(currPrice,"Test3")
      setInput(parseInt(input))
      if (input <= 0) {
        throw "Invalid input";
      }
      console.log(typeof(input),"Test2")
      console.log(balance - (parseInt(input) * currPrice));
      setBalance(balance - (parseInt(input) * currPrice));
    }
    catch(err){
      console.log(err);
    }
  }
  function sell(){
    setBalance(balance + (input * currPrice));
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