import React,{useContext} from 'react';
import {GlobalContext} from "./GlobalState";
import Transection from './Transection';

export default function History() {
  const {transections}  = useContext(GlobalContext);

    return (
        <>
          <h3>History</h3>
      <ul id="list" className="list">
         {transections.map(transection => (<Transection key={transection.id} transection={ transection }/>))} 
      </ul>  
        </>
    )
}
