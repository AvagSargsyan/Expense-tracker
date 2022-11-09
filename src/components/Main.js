export default function Main({ calculations }) {

  return (
    <main>
      <h1>Expense Tracker</h1>
      <div className="main-info">

        <div className="balance">
          <h2>Your balance</h2>
          <div className="balance-amount">
            ${calculations.income - calculations.expence}
          </div>
        </div>

        <div className="income-expence">
          <div className="income">
            <h3>income</h3>
            <div className="income-amount">
              ${calculations.income}
            </div>
          </div>
          <div className="expence">
            <h3>expence</h3>
            <div className="income-amount">
              ${calculations.expence}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
