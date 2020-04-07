import React, {useEffect, useState} from 'react';
import './App.css';

import DragNDrop from './components/DragNDrop'

const defaultData = [
  {title: 'group 1', items: ['vinod', 'Vijay', 'Vishnu','Srinivas']},
  {title: 'group 2', items: ['Chinnu','Vaishnavi', 'Varshitha']}
]

function App() {
  const [data, setData] = useState();  
  useEffect(() => {
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'))
      setData(JSON.parse(localStorage.getItem('List')))
    } else {
      setData(defaultData)
    }
  }, [setData])
  return (
    <div className="App">
      <header className="App-header">
      <DragNDrop data={data} />
      </header>
    </div>
  );
}

export default App;
