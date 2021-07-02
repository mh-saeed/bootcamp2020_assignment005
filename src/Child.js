import React from "react";
import CounterContextAPI from "./CounterContextAPI";

const Child = () => {
  let counterValue = React.useContext(CounterContextAPI);
 // console.log(CounterContextAPI);
  return (
    <div>
      <h1>Counter Value using Context API in child 1 </h1>
      <h2>Value is {counterValue[0]} </h2>
      <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Using Context API</button>{" "}
      <button onClick={()=>{counterValue[1](--counterValue[0])}}>Decrement Using Context API</button>
    </div>
  );
};

export default Child;
