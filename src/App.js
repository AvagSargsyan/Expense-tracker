import History from "./components/History";
import Main from "./components/Main";

function App() {

  const transactions = [
    {
      id: 1,
      title: 'Bought a phone',
      value: 999,
      positive: true
    },
    {
      id: 2,
      title: 'Got salary',
      value: 2000,
      positive: true
    }
  ]

  return (
    <div className="App">
      <Main />
      <History transactions={transactions} />
    </div>
  );
}

export default App;
