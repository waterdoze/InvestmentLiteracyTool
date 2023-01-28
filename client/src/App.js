import { useEffect, useState } from 'react'

function App() {

    const [pastDates, setPastDates] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=META&apikey=TX6O5JWMEMBV5M0M');
            const data = await response.json();

            const pd = Object.keys(data["Time Series (Daily)"]).map((key) => (
                {Date: key, Price: parseFloat(data["Time Series (Daily)"][key]["1. open"])}
            ))
    
            setPastDates(pd)
        } 

        fetchData()

    }, [])


    useEffect(() => {
        console.log(pastDates)
    }, [pastDates])

    return (
        <div className="App">
            {pastDates ? pastDates.map((item, i) => (
                <div key={i}>Date: {item.Date}, Price: {item.Price} </div>

            ))
             : <h1>can't show</h1>}

        </div>
        
    );
}

export default App;
