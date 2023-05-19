import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';

function App() {
  const [click, setClick] = useState(2);

  const city = 'Warszawa'

  const students = [
    {
      name: "Adrian",
      email: "adrian.widlak@example.com"
    },
    {
      name: "Zbyszek",
      email: "zbyszek.kowalski@example.com"
    },
    {
      name: "Barbara",
      email: "barbara.kowalska@example.com"
    }
  ]

  function onButtonClick(clickMessage) {
    setClick(click+1)
    console.log(clickMessage);
  }

  return (
    <div className="App">
      <h1>Hello, this is our first React App</h1>
      <span className='click-number'> {click} </span>
      <div className='cards'>
        {/* <Card student={students[0]} city={city}></Card>
        <Card student={students[1]} city={city}></Card> */}

        { students.map((student, index) => <Card key={index} student={student} city={city}></Card>)}
      </div>

      <button onClick={() => onButtonClick('Button pressed!')}>CLICK</button>
    </div>
  );
}

export default App;
