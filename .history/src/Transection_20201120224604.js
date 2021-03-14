import React from 'react'

export default function Transection({transection}) {
     const sign = transection.amount < 0 ? '-' : '+';
    return (
        <li className="minus">
          {transection.text} <span>{sign}R{transection.amount}</span><button className="delete-btn">x</button>
        </li>
    )
}
