import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const InitialState = {
   transactions: []
}

// create Context
export const GlobalContext = createContext(InitialState);





//provider Component
const GlobalState = ({ children }) => {

   const [state, dispatcher] = useReducer(AppReducer, InitialState);


   //Action
   const deleteTransaction = (id) => {
      dispatcher({
         type: 'REMOVE_TRANSACTION',
         payload: id
      })
   }

   const addTransaction = (transaction) => {
      dispatcher({
         type: 'ADD_TRANSACTION',
         payload: transaction
      })
   }

   return (
      <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
         {children}
      </GlobalContext.Provider>
   )
}

export default GlobalState
