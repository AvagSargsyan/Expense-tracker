import Transaction from './Transaction';

export default function History({ transactions }) {
  const list = transactions.length !== 0 ? transactions.map((transaction) => (
    <Transaction transaction={transaction} key={transaction.id} />
  )) : 'No transactions yet'

  return (
    <div className="history">
      <h2>History</h2>
      <div className="history-items">{list}</div>
    </div>
  );
}
