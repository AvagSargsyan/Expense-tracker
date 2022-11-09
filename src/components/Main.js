export default function Main() {
  return (
    <main>
      <h1>Expense Tracker</h1>
      <div className="main-info">
        <div className="balance">
          <h2>Your balance</h2>
          <div className="balance-value">$260.00</div>
        </div>
        <div className="income-expence">
          <div className="income">
            <h3>income</h3>
            <div className="income-value">$500.00</div>
          </div>
          <div className="expence">
            <h3>expence</h3>
            <div className="income-value">$240.00</div>
          </div>
        </div>
      </div>
    </main>
  );
}
