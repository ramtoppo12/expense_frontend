import React,{useContext  } from 'react';
import { GlobalContext } from "./GlobalState";


export default function Transection({transection}) {
     const sign = transection.amount < 0 ? '-' : '+';
  const { deleteTransection }  = useContext(GlobalContext);


  console.log(deleteTransection)

    return (
        <li className={transection.amount < 0 ? "minus":"plus"}>
          {transection.text} <span>{sign}₹{Math.abs(transection.amount)}</span><button onClick={()=>deleteTransection(transection._id)} className="delete-btn">x</button>
        </li>
    )
}

