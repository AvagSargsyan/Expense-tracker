export default function IncomeExpenseCard({ currentValues }) {
  return (
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
  )
}
