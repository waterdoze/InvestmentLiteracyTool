import {Data} from './utils/Data';
import Graph from './components/Graph';
function App() {
  
  return (
    <><h1 className="text-heading">
      Line Chart Using Rechart
    </h1>
    <Graph data={Data} />
    </>
  );
}

export default App;
