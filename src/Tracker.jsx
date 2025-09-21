import React, { useState } from "react";

export default function Tracker({ budget }) {
  const [homeRent, setHomeRent] = useState(0);
  const [bills, setBills] = useState(0);
  const [grocery, setGrocery] = useState(0);
  const [travelling, setTravelling] = useState(0);

  const [inputHome, setInputHome] = useState("");
  const [inputBills, setInputBills] = useState("");
  const [inputGrocery, setInputGrocery] = useState("");
  const [inputTravelling, setInputTravelling] = useState("");

  const [error, setError] = useState("");  

  const totalSpent = homeRent + bills + grocery + travelling;
  const remaining = budget - totalSpent;

  const addExpense = (value, setter) => {
    const amt = parseFloat(value);
    if (isNaN(amt)) return;

    const newTotal = totalSpent + amt;
    if (newTotal > budget) {
      setError("⚠️ Expense exceeds allocated budget!");
      return;
    }

    setError("");
    setter(prev => prev + amt);  
  };

  const handleHomeSubmit = e => {
    e.preventDefault();
    addExpense(inputHome, setHomeRent);
    setInputHome("");
  };

  const handleBillsSubmit = e => {
    e.preventDefault();
    addExpense(inputBills, setBills);
    setInputBills("");
  };

  const handleGrocerySubmit = e => {
    e.preventDefault();
    addExpense(inputGrocery, setGrocery);
    setInputGrocery("");
  };

  const handleTravellingSubmit = e => {
    e.preventDefault();
    addExpense(inputTravelling, setTravelling);
    setInputTravelling("");
  };

  return (
    <div>
      <h1>Manage Expenses</h1>
      <p>Allocated Budget: {budget}</p>

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      <form onSubmit={handleHomeSubmit}>
        <input
          type="text"
          placeholder="Enter Home Rent"
          value={inputHome}
          onChange={e => setInputHome(e.target.value)}
          disabled={remaining <= 0}    
        />
        <button type="submit" disabled={remaining <= 0}>Enter</button>
      </form>
      <p>Home Rent: {homeRent}</p>

      <form onSubmit={handleBillsSubmit}>
        <input
          type="text"
          placeholder="Enter Bills"
          value={inputBills}
          onChange={e => setInputBills(e.target.value)}
          disabled={remaining <= 0}
        />
        <button type="submit" disabled={remaining <= 0}>Enter</button>
      </form>
      <p>Bills: {bills}</p>

      <form onSubmit={handleGrocerySubmit}>
        <input
          type="text"
          placeholder="Enter Grocery"
          value={inputGrocery}
          onChange={e => setInputGrocery(e.target.value)}
          disabled={remaining <= 0}
        />
        <button type="submit" disabled={remaining <= 0}>Enter</button>
      </form>
      <p>Grocery: {grocery}</p>

      <form onSubmit={handleTravellingSubmit}>
        <input
          type="text"
          placeholder="Enter Travelling"
          value={inputTravelling}
          onChange={e => setInputTravelling(e.target.value)}
          disabled={remaining <= 0}
        />
        <button type="submit" disabled={remaining <= 0}>Enter</button>
      </form>
      <p>Travelling: {travelling}</p>

      <p>Total Spent: {totalSpent}</p>
      <p>Remaining Budget: {remaining >= 0 ? remaining : 0}</p>
    </div>
  );
}
