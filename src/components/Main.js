import IncomeExpenseCard from "./IncomeExpenseCard";

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

        <IncomeExpenseCard currentValues={currentValues} />

      </div>
    </main>
  );
}
