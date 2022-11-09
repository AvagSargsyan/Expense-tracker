import Transaction from './Transaction';

export default function History({ transactions }) {
  const list = transactions.map((transaction) => (
    <Transaction transaction={transaction} key={transaction.id} />
  ));

  return (
    <div className="history">
      <h2>History</h2>
      <div className="history-items">{list}</div>
    </div>
  );
}
