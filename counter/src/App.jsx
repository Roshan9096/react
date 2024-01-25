import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)
  const addvalue = () => {
    setCounter(counter+1);
  }
  const remove = () => {
    setCounter(counter-1);
  }
  
    const buttonStyle = {
      backgroundColor: 'lightblue',
      // You can add other styles as needed
      padding: '10px',
      borderRadius: '5px',
      
    };

  return (
    <>
      
      <h1>basic counter project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue} style={buttonStyle}>Add value{counter}</button>
      <br></br>
      <br></br>
      <button onClick={remove} style={buttonStyle}>Remove value {counter}</button>
      <p>heyyy value update every where {counter}</p>
    </>
  )
}

export default App
