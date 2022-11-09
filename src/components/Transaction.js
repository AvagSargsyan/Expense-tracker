export default function Transaction({ transaction }) {
  return (
    <div className="transaction">
      <span className="title">{transaction.title}</span>
      <span className="value">
        {transaction.positive ? '+' : '-'}
        {transaction.value}
      </span>
    </div>
  );
}
