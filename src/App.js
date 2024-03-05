import logo from './logo.svg';
import './App.css';

function App() {
  const numbers = [1,2,3,4,5];

  // forEach
  let total = 0;
  numbers.forEach( numbers =>{
    total += numbers;
  });

  // reduce

  return (
    <div className="App">
      {total}
    </div>
  );
}

export default App;
