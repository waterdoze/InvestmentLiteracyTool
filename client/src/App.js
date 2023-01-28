import React from "react";
import './index.css'
import Title from "./components/Title";
import Resources from "./components/Resources";
import {Data} from './utils/Data';
import Graph from './components/Graph';
function App() {
	return (
		<div className="App">
			<div id="SidePane">
				<Title />
			</div>
			<div id="StockPane">
        <Graph data={Data} />
			</div>
		</div>
	);
}

export default App;
