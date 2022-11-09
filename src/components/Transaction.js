export default function Transaction({ transaction }) {
  return (
    <div className="transaction">
      <span className="title">{transaction.title}</span>
      <span className="amount">
        {transaction.positive ? '+' : '-'}
        {transaction.amount}
      </span>
    </div>
  );
}
