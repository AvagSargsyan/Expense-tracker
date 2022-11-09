export default function Main({ currentValues }) {

  return (
    <main>
      <h1>Expense Tracker</h1>
      <div className="main-info">

        <div className="balance">
          <h2>Your balance</h2>
          <div className="balance-amount">
            ${currentValues.income - currentValues.expence}
          </div>
        </div>

        <div className="income-expence">
          <div className="income">
            <h3>income</h3>
            <div className="income-amount">
              ${currentValues.income}
            </div>
          </div>
          <div className="expence">
            <h3>expence</h3>
            <div className="income-amount">
              ${currentValues.expence}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
