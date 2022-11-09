export default function Main({ transactions }) {


  // Calculate income based on transactions
  const income = transactions.reduce((acc, tr) => tr.positive ? acc + tr.amount : acc, 0);

  // Calculate expence based on transactions
  const expence = transactions.reduce((acc, tr) => !tr.positive ? acc + tr.amount : acc, 0);

  // Calculate balance
  const balance = income - expence;

  return (
    <main>
      <h1>Expense Tracker</h1>
      <div className="main-info">
        <div className="balance">
          <h2>Your balance</h2>
          <div className="balance-amount">
            ${balance}
          </div>
        </div>
        <div className="income-expence">
          <div className="income">
            <h3>income</h3>
            <div className="income-amount">
              ${income}
            </div>
          </div>
          <div className="expence">
            <h3>expence</h3>
            <div className="income-amount">
              ${expence}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
