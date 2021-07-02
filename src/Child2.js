import React from "react";
import counterReducer from "./CounterReducer";

const Child2 = () => {
  let [state, dispatch] = React.useReducer(counterReducer, 0);
  //console.log(state);
  return (
    <div>
      <h1>Counter Value using Use Reducer in child 2 </h1>
      <h2>Value is {state}</h2>
      <button onClick={()=>{dispatch('INCREMENT')}}>Increment using Use Reducer</button> {""}
      <button onClick={()=>{dispatch('DECREMENT')}}>Decrement using Use Reducer</button>
    </div>
  );
};

export default Child2;
