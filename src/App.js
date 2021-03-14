import React,{useEffect} from 'react';
import "./App.css";
import Header from "./Header"
import IncomeExpense from './IncomeExpense';
import Balance from "./Balance";
import History from './History';
import AddnewTransection from './AddnewTransection';
import {GlobalProvider} from './GlobalState';
import axios from "axios"

export default function App() {

    useEffect( async () => {
        const res = await axios.get('/api/v1/transections');
    console.log("this is data",res)
    }, [])

    return (
        <GlobalProvider>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpense/>
                <History/>
                <AddnewTransection/>
            </div>
        </GlobalProvider>
    )
}
