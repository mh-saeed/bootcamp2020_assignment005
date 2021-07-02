import React from "react";
import CounterContextAPI from "./CounterContextAPI";
import Parent from "./Parent";

function App() {
  let countState= React.useState(0);// [countState, setCountState]  
  return (
    <CounterContextAPI.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContextAPI.Provider>
  );
}

export default App;
