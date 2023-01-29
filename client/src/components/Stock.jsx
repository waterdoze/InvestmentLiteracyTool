import React, { useEffect, useState } from "react";

import Title from "./Title";
import StockInfo from "./StockInfo";
import Balance from "./Balance";
import Resources from "./Resources";
import Transaction from "./Transaction";

import {Data} from '../utils/Data';
import Graph from './Graph';

function App() {

    const [data, setData] = useState([]);
    const [currData, setCurrData] = useState([]);
    const [stockIndex, setStockIndex] = useState(10);
    const [currStock, setCurrStock] = useState({Date: "", Price: 148.05});
    const [balance, setBalance] = useState(10000);
  
  
    const [time, setTime] = useState(10);
    useEffect(()  => {
      const fetchData = async () => {
        const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=META&apikey=TX6O5JWMEMBV5M0M%27');
        const json = await response.json();
        return json;
        }

        fetchData().then((json) => {
            const pd = Object.keys(json["Time Series (Daily)"]).map((key) => (
                {Date: key, Price: parseFloat(json["Time Series (Daily)"][key]["1. open"])}
            )).reverse();
            setData(pd);
            setCurrData(pd.slice(0,10));
            
            console.log(currData)
        });

      }, []);
    useEffect(() => {
        //setCurrStock(currData[currData.length - 1]);
    }, [currData]);


    /*add new stock to graph*/
    useEffect(() => {
      let interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    
    useEffect(() => {
      if (time === 0) {
        setTime(10);
        const newData = [...currData];
        newData.push(data[stockIndex]);
        setStockIndex(stockIndex + 1);
        setCurrData(newData);
        setCurrStock(newData[newData.length - 1]);
        
      }
    }, [time]);
  
      return (
          <div id="App">
              <div id="SidePane">
                  <Title />
                  <hr />
                  <StockInfo price = {currStock.Price}/>
                  <Balance balance={balance}/>
                  <hr />
                  <Resources />
              </div>
              <div id="StockPane">
                  <div id="GraphWrapper">
                      <Graph data={currData} />
                  </div>
                  <Transaction setBalance={setBalance} balance={balance} currPrice = {currStock.Price}/>
              </div>
          </div>
      );
  }
  
  export default App;
  