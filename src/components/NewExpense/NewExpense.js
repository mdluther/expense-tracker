import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const handleSubmit = (enteredData) => {
    const expenseData = { ...enteredData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onInputSubmit={handleSubmit} />
    </div>
  );
};

export default NewExpense;
