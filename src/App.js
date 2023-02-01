import { useEffect, useState } from 'react';
import AddTransaction from './components/AddTransaction';
import History from './components/History';
import Main from './components/Main';
import { db } from './firebase';
import { query, collection, onSnapshot, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Read transactions from firebase
  useEffect(() => {
    const q = query(collection(db, 'transactions'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let transactionsArr = [];
      querySnapshot.forEach((doc) => {
        transactionsArr.push({ ...doc.data(), id: doc.id });
        setTransactions(transactionsArr);
      })
    })

    return () => unsubscribe();
  }, [])

  // Current values of income and expense based on transactions
  const currentValues = {
    income: transactions.reduce(
      (acc, tr) => (tr.positive ? acc + tr.amount : acc),
      0
    ),
    expense: transactions.reduce(
      (acc, tr) => (!tr.positive ? acc + tr.amount : acc),
      0
    ),
  };

  // Create new transaction
  const onAddTransaction = async (newTransaction) => {
    await addDoc(collection(db, 'transactions'), newTransaction)
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
        balance={currentValues.income - currentValues.expense}
      />
    </div>
  );
}

export default App;
