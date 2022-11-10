export default function Main({ currentValues }) {

  return (
    <main>
      <h1>Expense Tracker</h1>
      <div className="main-info">

        <div className="balance">
          <h2>Your balance</h2>
          <div className="balance-amount">
            ${currentValues.income - currentValues.expense}
          </div>
        </div>

        <div className="income-expense">
          <div className="income">
            <h3>income</h3>
            <div className="income-amount">
              ${currentValues.income}
            </div>
          </div>
          <div className="expense">
            <h3>expense</h3>
            <div className="income-amount">
              ${currentValues.expense}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
