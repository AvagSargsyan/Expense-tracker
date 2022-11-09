import { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import History from './components/History';
import Main from './components/Main';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Current values of income and expence based on transactions
  const currentValues = {
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

  function onDeleteTransaction(id) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((tr) => tr.id !== id)
    );
  }

  return (
    <div className="App">
      <Main currentValues={currentValues} />
      <History transactions={transactions} onDelete={onDeleteTransaction} />
      <AddTransaction
        onAdd={onAddTransaction}
        balance={currentValues.income - currentValues.expence}
      />
    </div>
  );
}

export default App;
