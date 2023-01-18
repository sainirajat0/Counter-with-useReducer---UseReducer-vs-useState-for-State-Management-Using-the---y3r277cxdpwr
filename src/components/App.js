import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer, initialState)
  return (
    <div id="main">
      <span id='counter'>{state}</span>
    <div>
      <button id='increment-btn' onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
      <button id='decrement-btn' onClick={() => dispatch({type: "DECREMENT"})}>Decrease</button>
      
    </div>
    </div>
  )
}


export default App;
