import logo from './logo.svg';
import './App.css';
import React, {useCallback, useState} from 'react';
import Counter from './Counter';
import Button from './Button';

function App() {
  const [decrement, setDecrement] = useState(10);
  const [increment, setIncrement] = useState(0);


  // use useCallback hook to prevent the component from rerendering
  // the useCallback takes in two arguments, the callback function and the dependancy array
  // a change in the dependancy array initiates the callback function to return a new function thus renendering
  const decrementCounter = useCallback(()=>{
    setDecrement((decrement)=> decrement - 1);
  }, [decrement]) 

  const incrementCounter =useCallback(()=>{
    setIncrement((increment)=> increment + 1);
  },[increment])
  return (
    <div className="App">
      <Counter counter={increment} heading="Increment Counter"/> 
      <Button counter={increment} handleClick={incrementCounter} text="Text increased"/>
      <Counter  counter={decrement} heading="Decrement Counter"/> 
      <Button counter={decrement} handleClick={decrementCounter} text="Text decreased"/>
    </div>
  );
}

export default App;
