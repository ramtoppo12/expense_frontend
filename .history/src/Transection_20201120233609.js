import React from 'react';


export default function Transection({transection}) {
     const sign = transection.amount < 0 ? '-' : '+';
    return (
        <li className={transection.amount < 0 ? "minus":"plus"}>
          {transection.text} <span>{sign}₹{Math.abs(transection.amount)}</span><button className="delete-btn">x</button>
        </li>
    )
}

