import { useState } from 'react';

export default function AddTransaction({ onAdd, balance }) {
  // Make text and amount inputs controlled
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="add-transaction">
      <h2>Add new transaction</h2>
      <form
        className="add-transaction-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (balance + amount < 0) {
            alert('Not enough money!');
            return;
          }
          onAdd({
            title: text,
            amount: amount >= 0 ? amount : amount * -1,
            positive: amount >= 0,
          });
          setText('');
          setAmount('');
        }}
      >
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="amount">
          Amount <span>(negative - expense, positive - income)</span>
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          required={true}
        />

        <button>Add transaction</button>
      </form>
    </div>
  );
}
