const AppReducer = (state, action) => {

   switch (action.type) {
      case 'REMOVE_TRANSACTION': return {
         ...state,
         transactions: state.transactions.filter((transaction) => {
            return transaction.id !== action.payload;
         })
      }
      case 'ADD_TRANSACTION': return {
         ...state,
         transactions: [...state.transactions, action.payload]
      }
      default: return state;
   }
}

export default AppReducer;