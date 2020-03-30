import React, { useState } from 'react'; 
import './App.css';

function App() {



  const [elements , setElements] = useState([]);
  const [inputValue, setInputValue] = useState("")

 
  
  const send = () =>  { 

    console.log('Click happened');
  }


  return (
    <div className="App">
      <h1>Inserisci una parola da aggiungere...</h1> 
      <div className="box">
        <input 
          type="text" 
          value={inputValue} 
          onChange={e => setInputValue(e.target.value)}
          placeholder="Say something..." id="in" 
        />
      </div>
        <button onClick={send}>Copy this!</button>  

        {inputValue}
    </div>
  );
}

export default App;
