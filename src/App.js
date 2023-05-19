import './App.css';
import Card from './components/card/Card';

function App() {
  const city = 'Warszawa'

  const student1 = {
    name: "Adrian",
    email: "adrian.widlak@example.com"
  }

  const student2 = {
    name: "Zbyszek",
    email: "zbyszek.kowalski@example.com"
  }

  return (
    <div className="App">
      <h1>Hello, this is our first React App</h1>

      <div className='cards'>
        <Card student={student1} city={city}></Card>
        <Card student={student2} city={city}></Card>
      </div>
    </div>
  );
}

export default App;
