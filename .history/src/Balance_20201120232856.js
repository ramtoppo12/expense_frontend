import React,{useContext} from 'react';
import { GlobalContext } from "./GlobalState";


export default function Balance() {
  const { transections }  = useContext(GlobalContext);
  const amounts = transections.map(transection => transection.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
             <h4>Your Balance</h4>
    <h1 id="balance">₹{total}</h1>
        </div>
    )
}
