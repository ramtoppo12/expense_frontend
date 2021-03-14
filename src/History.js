import React,{ useContext,useEffect } from 'react';
import { GlobalContext } from "./GlobalState";
import Transection from './Transection';

export default function History() {
  const { transections,getTransections }  = useContext(GlobalContext);


  useEffect(() => {
    getTransections();
  }, [])

    return (
        <>
          <h3>History</h3>
      <ul id="list" className="list">
         {transections.map(transection => (<Transection key={ transection._id } transection={ transection } />))} 
      </ul>
        </>
    )
}
