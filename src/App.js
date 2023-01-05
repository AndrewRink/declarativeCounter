import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  const increment = () => {
    setCounter(prevState => prevState + 1)
  }
  const decrement = () => {
    if (counter === 0) return
    setCounter(currentVal => currentVal - 1)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      
      <input onChange={handleChange} />
      <h3>Name: {name} </h3>
    </div>
  );
}

export default App;
