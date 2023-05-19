import './App.css';
import Card from './components/card/Card';

function App() {
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

  return (
    <div className="App">
      <h1>Hello, this is our first React App</h1>

      <div className='cards'>
        {/* <Card student={students[0]} city={city}></Card>
        <Card student={students[1]} city={city}></Card> */}

        { students.map((student, index) => <Card key={index} student={student} city={city}></Card>)}
      </div>
    </div>
  );
}

export default App;
