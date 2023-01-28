import React from "react";
import './index.css'
import Title from "./components/Title";
import StockInfo from "./components/StockInfo";
import Balance from "./components/Balance";
import Resources from "./components/Resources";
import Transaction from "./components/Transaction";
import {Data} from './utils/Data';
import Graph from './components/Graph';

function App() {
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
        			<Graph data={Data} />
				</div>
				<Transaction />
			</div>
		</div>
	);
}

export default App;
