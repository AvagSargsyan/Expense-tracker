import { useState } from 'react';

export default function AddTransaction() {
  // Make text and amount inputs controlled components
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <form className="add-transaction-form">
      <label htmlFor="text">Text</label>
      <input
        type="text"
        id="text"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="amount">
        Text <span>(negative-expense, positive - income)</span>
      </label>
      <input
        type="text"
        id="amount"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button>Add transaction</button>
    </form>
  );
}
