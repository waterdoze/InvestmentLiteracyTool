import React from "react";
import './index.css'
import Title from "./components/Title";
import StockInfo from "./components/StockInfo";
import Balance from "./components/Balance";
import Resources from "./components/Resources";
import Transaction from "./components/Transaction";


function App() {
	return (
		<div className="App">
			<div id="SidePane">
				<Title />
			</div>
			<div id="StockPane">

			</div>
		</div>
	);
}

export default App;
