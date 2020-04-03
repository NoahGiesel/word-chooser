import React, { useState } from 'react'; 
import './App.css';

function App() {



  const [elements , setElements] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [counter, setCounter] = useState(0) 
  const [elementsArray, setElementsArray] = useState([])
  
  const inputList =  elements.map((e) =>   <li key={e.id}>{e.value}</li> );
  const serverList = elementsArray.map((e) => <li key={e.id}>{e.value}</li> );
  
  const send = () =>  { 
    setInputValue("")
    setElements([...elements, {
      id: counter,
      value : inputValue
    } ])
    setCounter(counter+1) 
    postInput()
  }
  
  const retrive = () =>  {  
     getInput()
  }

  
  const EmptyDatabase = () =>  { 
    emptyDatabase()
    setElements([])
    setInputValue("")
  }




  const postInput = () => { 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputvalue:inputValue })
    };
    fetch('http://localhost:5000/array/add', requestOptions)  
     } 
  const getInput = () => { 
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    };
    fetch('http://localhost:5000/array/get', requestOptions)
        .then(response => response.json())  
        .then(data => copyPassedArray(data)) 
     } 

     const copyPassedArray = data => { 
       for(let i = 0 ; i< data.length; i++) { 
        elementsArray[i] = data[i]
       }
       console.log(elementsArray)
     }
     
    const emptyDatabase = () => { 
      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify()
      };
      fetch('http://localhost:5000/array/deleteTitle', requestOptions)   
      
     } 

  return (
    <div className="App">
      <h1 className="title">Inserisci una parola da aggiungere ! </h1> 
      <div className="box">
        <input 
          type="text" 
          value={inputValue} 
          onChange={e => setInputValue(e.target.value)}
          placeholder="Say something..." id="in" 
        />
      </div>
      <div className="button-grid">
        <button onClick={send}>Send Input</button>  
        <button onClick={retrive}>Retrieve Word</button>  

      </div>

      <div className="container-grid">
        <div className="input-given">
          <h2>input informations </h2>
          <ul>{inputList}</ul>
        </div>
        <div className="out-puts">
          <h2>output informations </h2>

        </div>
        <div className="server-status">
          <h2>server informations </h2>
          <ul>{serverList}</ul>
        </div>
      </div>
        <button className="buttonEmpty" onClick={EmptyDatabase}>Empty Database</button>  
    </div>
  );
}

export default App;
