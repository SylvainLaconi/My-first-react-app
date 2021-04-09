import './App.css';
import Card from './components/Card.jsx';
import { mountainsList } from './datas/DataList';
import { useState } from 'react';

function App() {
  const [croissant, setCroissant] = useState(false);
  const [higher, setHigher] = useState(true);

  const handleSortCroissant = () => {
    setCroissant(!croissant);
  };

  const handleSortPodium = () => {
    setHigher(!higher);
  };

  return (
    <div className="App">

      <h1>Les plus hauts sommets par continent</h1>
      
      <button onClick={handleSortCroissant}>Ordre { croissant ? "DOWN" : "UP" }</button>

      <div className="main">
        {mountainsList
        .sort((mountain1, mountain2) => croissant ? mountain1.height - mountain2.height : mountain2.height - mountain1.height)
        .map((mountain) => {
          return (
            <Card {...mountain}/>
          )})
        }
      </div>

      <h1>Les podiums</h1>

      <button onClick={ handleSortPodium }>Les 3 { higher ? "moins" : "plus" } hauts</button>

      <div className="main">
        {mountainsList
        .filter((mountain) => higher ? mountain.height > 6000 : mountain.height < 6000)
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
