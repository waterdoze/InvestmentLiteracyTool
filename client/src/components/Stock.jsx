import React, { useEffect, useState } from "react";

import Title from "./Title";
import StockInfo from "./StockInfo";
import Balance from "./Balance";
import Resources from "./Resources";
import Transaction from "./Transaction";
import NewsPane from "./NewsPane";

import {Data} from '../utils/Data';
import NewsBank from '../utils/NewsBank';
import Graph from './Graph';

function App() {

    const [data, setData] = useState([]);
    const [currData, setCurrData] = useState([]);
    const [stockIndex, setStockIndex] = useState(10);
    const [currStock, setCurrStock] = useState({Date: "", Price: 148.05});
    const [balance, setBalance] = useState(10000);
    const [ownedStocks, setOwnedStocks] = useState(0);
    const [oldStock, setOldStock] = useState(148.05);
    const [newsList, setNewsList] = useState([]);
    const [newsPoints, setNewsPoints] = useState(0);

    // reveals the NewsPane for 5 seconds
    const revealNews = () => {
        const pane = document.getElementById('NewsPane');
        pane.style.opacity = 1;
        setTimeout(() => {pane.style.opacity = 0;}, 5000);
    }
  
  
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

        //news interjection... decide to initiate news + handle news
        
        if (newsPoints === 0) {
            newData.push(data[stockIndex]);

            // initiates effect of news for the next 4 ticks
            if (Math.random() < 0.1) {
                const numTicks = 4 + (Math.floor(Math.random() * 4) - 1)
                setNewsPoints(numTicks);
                const randomIndex = Math.floor(Math.random() * NewsBank.length)
                const randomNews = NewsBank[randomIndex];
                setNewsList([randomNews, ...newsList]);
                console.log(`New Event Happening. Effect: ${randomNews.effect}, Length: ${numTicks}`)
            }
        }
        // handles each tick of news effect
        else {
            setNewsPoints(newsPoints - 1);

            // interpolate between old and new stock price
            // offset is based on current value, then interpolation adds randomness
            const interpolatedValue = (data[stockIndex].Price + currStock.Price) / 2;
            const newPrice = currStock.Price + newsList[0].effect * Math.random() * 4 + interpolatedValue * 0.05;
            console.log(data[stockIndex].Price + ' -> ' + newPrice);
            data[stockIndex].Price = Math.max(0, newPrice);

            newData.push(data[stockIndex]);
        }
        
        setStockIndex(stockIndex + 1);
        setOldStock(currStock.Price);
        setCurrData(newData);
        setCurrStock(newData[newData.length - 1]);
        
      }
    }, [time]);
  
      return (
          <div id="App">
              <div id="SidePane">
                  <Title />
                  <hr />
                  <StockInfo price = {currStock.Price} oldStock={oldStock}/>
                  <Balance balance={balance} ownedStocks={ownedStocks}/>
                  <hr />
                  <Resources revealNews={revealNews}/>
                  <NewsPane newsList={newsList}/>
              </div>
              <div id="StockPane">
                  <div id="GraphWrapper">
                      <Graph data={currData} />
                  </div>
                  <Transaction setBalance={setBalance} balance={balance} ownedStocks={ownedStocks} setOwnedStocks={setOwnedStocks} currPrice = {currStock.Price}/>
              </div>
          </div>
      );
  }
  
  export default App;
  