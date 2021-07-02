import React from "react";
import CounterContextAPI from "./CounterContextAPI";

const Child = () => {
  let counterValue = React.useContext(CounterContextAPI);
 // console.log(counterValue);
  return (
    <div>
      <h1>Counter Value using Context API is: {counterValue[0]} </h1>
      <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Using Context API</button>
    </div>
  );
};

export default Child;
