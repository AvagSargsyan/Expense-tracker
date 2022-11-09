import AddTransaction from "./components/AddTransaction";
import History from "./components/History";
import Main from "./components/Main";

function App() {

  const transactions = [
    {
      id: 1,
      title: 'Bought a phone',
      amount: 999,
      positive: true
    },
    {
      id: 2,
      title: 'Got salary',
      amount: 2000,
      positive: true
    }
  ]

  return (
    <div className="App">
      <Main />
      <History transactions={transactions} />
      <AddTransaction />
    </div>
  );
}

export default App;
