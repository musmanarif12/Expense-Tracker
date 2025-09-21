import React from "react";
import { useState } from "react";
import Tracker from "./Tracker";

function App() {
  const [Budget, setBudget] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const setAllocatedBudget = (e) => {
    e.preventDefault();
    const amount = parseFloat(inputValue);
    if (!isNaN(amount)) {
      setBudget(amount);
      setInputValue("");
    }
  };
  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <p>“Track Your Monthly Spending and Stay Within Budget”</p>
        <form onSubmit={setAllocatedBudget}>
          <h2>Specify Your Budget (PKR)</h2>
          <input
            type="text"
            placeholder="Enter Budget"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Enter</button>
        </form>
        <p>Budget: {Budget}</p>
        <Tracker budget = {Budget}/>
      </div>
    </>
  );
}
export default App;
