import { useState } from "react";
import { nanoid } from "nanoid";

const Transaction = ({ setTransactions, setAmount, setIncome, setExpense }) => {
  const [transactionText, setTransactionText] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const handleSubmit = () => {
    let type;
    if (+transactionAmount < 0) {
      type = "expense";
      setExpense((prev) => prev + +transactionAmount);
    } else {
      type = "income";
      setIncome((prev) => prev + +transactionAmount);
    }
    setAmount((prev) => prev + +transactionAmount);
    setTransactions((prev) => [
      ...prev,
      {
        id: nanoid(),
        type,
        text: transactionText,
        amount: +transactionAmount,
      },
    ]);
    setTransactionText("");
    setTransactionAmount("");
  };

  return (
    <div className="transaction">
      <h3 className="transaction-title pb-5">Add new transaction</h3>
      <form onSubmit={(e) => e.preventDefault()} className="transaction-form">
        <label htmlFor="transaction-text">Text</label>
        <input
          type="text"
          id="transaction-text"
          required
          placeholder="Enter text..."
          value={transactionText}
          onChange={(e) => setTransactionText(e.target.value)}
        />
        <label htmlFor="transaction-amount">
          Amount
          <br />
          (negative-expense, positive-income)
        </label>
        <input
          type="number"
          id="transaction-amount"
          required
          placeholder="Enter amount..."
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default Transaction;
