import React from 'react';
import { GlobalContext } from "./GlobalState";


export default function IncomeExpense() {

  
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
    return (
          <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+R-0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-R-0.00</p>
        </div>
      </div>
    )
}
