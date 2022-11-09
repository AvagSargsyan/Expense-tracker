import { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import History from './components/History';
import Main from './components/Main';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Calculate income and based on transactions
  const calculations = {
    income: transactions.reduce(
      (acc, tr) => (tr.positive ? acc + tr.amount : acc),
      0
    ),
    expence: transactions.reduce(
      (acc, tr) => (!tr.positive ? acc + tr.amount : acc),
      0
    ),
  };

  function onAddTransaction(newTransaction) {
    newTransaction.id = transactions.length + 1;
    setTransactions((prevTransactions) => {
      return [newTransaction, ...prevTransactions];
    });
  }

  return (
    <div className="App">
      <Main calculations={calculations} />
      <History transactions={transactions} />
      <AddTransaction
        onAdd={onAddTransaction}
        balance={calculations.income - calculations.expence}
      />
    </div>
  );
}

export default App;
