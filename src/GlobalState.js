import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//initial state

const initialState ={
    transections: [],
    error:null,
    loading:true
}

// create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);


    //actions
    async function getTransections(){
        try {
            const res = await axios.get('https://warm-ravine-91109.herokuapp.com/api/v1/transections/');

            dispatch({
                type:'GET_TRANSECTION',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type:'TRANSECTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function deleteTransection(id){

          try {
                 await axios.delete(`https://warm-ravine-91109.herokuapp.com/api/v1/transections/${id}`);
       dispatch({
            type:"DELETE_TRANSECTION",
            payload:id,
        })
          } catch (err) {
              dispatch({
                type:'TRANSECTION_ERROR',
                payload: err.response.data.error
            })
          }
    }
    async function addTransection(transection){
const config={
    header:{
        'Content-Type':'application/json'
    }
}

        try {
            const res = await axios.post('https://warm-ravine-91109.herokuapp.com/api/v1/transections/',transection,config)
            dispatch({
            type:"ADD_TRANSECTION",
            payload:res.data.data,
        })
        } catch (err) {
             dispatch({
                type:'TRANSECTION_ERROR',
                payload: err.response.error
            })
        }
    }



    return(<GlobalContext.Provider value={{
        transections:state.transections,
        error:state.error,
        loading:state.loading,
        getTransections,
        deleteTransection,
        addTransection,
    }}>
        {children}
    </GlobalContext.Provider>)
}