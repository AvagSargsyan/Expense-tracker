export default function Transaction({ transaction, onDelete }) {
  const styles = {
    color: transaction.positive ? 'rgb(11, 168, 103)' : 'rgb(182, 45, 45)',
  };

  return (
    <div className="transaction" style={styles}>
      <span className="title">{transaction.title}</span>
      <span className="amount">
        {transaction.positive ? '+' : '-'}
        {transaction.amount}
      </span>
      <button
        className="delete-transaction"
        onClick={() => onDelete(transaction.id)}
      >
        X
      </button>
    </div>
  );
}
