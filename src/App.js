import React,{useEffect} from 'react';
import "./App.css";
import Header from "./Header"
import IncomeExpense from './IncomeExpense';
import Balance from "./Balance";
import History from './History';
import AddnewTransection from './AddnewTransection';
import {GlobalProvider} from './GlobalState';

export default function App() {



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
