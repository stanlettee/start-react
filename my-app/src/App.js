import './App.css';

const fruits = ['apple', 'pineapple', 'pear', 'orange', 'plum']

function App() {
  return (
    <div className="App">
      <ul>
        {
          fruits.map((fruit) => {
            return <li>{fruit}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
