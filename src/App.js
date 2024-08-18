import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import GlobalState from './Context/GlobalState';

function App() {
  return (
    <div >
      <GlobalState>
        <Header />
        <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalState>
    </div>
  );
}

export default App;
