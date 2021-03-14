import React, { useState,useContext } from 'react'
import { GlobalContext } from './GlobalState';

export default function AddnewTransection() {

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
  const { addTransection }  = useContext(GlobalContext);

const onsubmit= (e) =>{
  e.preventDefault();
  id: Math.floor(Math.random()*100000000),
  text,
  amount
}

    return (
        <>
            <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
        </>
    )
}