import React, { useEffect, useState } from "react";
import './index.css'
import Title from "./components/Title";
import StockInfo from "./components/StockInfo";
import Balance from "./components/Balance";
import Resources from "./components/Resources";
import Transaction from "./components/Transaction";
import {Data} from './utils/Data';
import Graph from './components/Graph';

function App() {

  const [data, setData] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [stockIndex, setStockIndex] = useState(10);
  const [currStock, setCurrStock] = useState();


  const [time, setTime] = useState(10);
  useEffect(()  => {
    const fetchData = async () => {
      const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=META&apikey=TX6O5JWMEMBV5M0M%27');
      const json = await response.json();

      const pd = Object.keys(json["Time Series (Daily)"]).map((key) => (
        {Date: key, Price: parseFloat(json["Time Series (Daily)"][key]["1. open"])}
      )).reverse();
      setData(pd);
      setCurrData(pd.slice(0,10));
      setCurrStock(pd[currData.length - 1]);
      console.log(currData)
      }
    fetchData();
    }, []);
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
				<StockInfo />
				<Balance />
				<hr />
				<Resources />
			</div>
			<div id="StockPane">
				<div id="GraphWrapper">
        			<Graph data={currData} />
				</div>
				<Transaction />
			</div>
		</div>
	);
}

export default App;
