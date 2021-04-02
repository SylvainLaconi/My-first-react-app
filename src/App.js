import './App.css';
import Card from './components/Card.jsx';
import { mountainsList } from './datas/DataList';

function App() {
  return (
    <div className="App">

      <h1>Les plus hauts sommets par continent</h1>

      <div className="main">
        {mountainsList
        .sort((mountain1, mountain2) => mountain2.height - mountain1.height)
        .map((mountain) => {
          return (
            <Card {...mountain}/>
          )})
        }
      </div>

      <h1>Les sommets de plus de 6000m</h1>

      <div className="main">
        {mountainsList
        .filter((mountain) => mountain.height > 6000)
        .map((mountain) => {
          return (
            <Card {...mountain}/>
          )})
        }
      </div>
    </div>
  );
}

export default App;
