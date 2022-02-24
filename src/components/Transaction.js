const Transaction = () => {
  return (
    <div className="transaction">
      <h3 className="transaction-title pb-5">Add new transaction</h3>
      <form onSubmit={(e) => e.preventDefault()} className="transaction-form">
        <label htmlFor="transaction-text">Text</label>
        <input type="text" id="transaction-text" placeholder="Enter text..." />
        <label htmlFor="transaction-amount">
          Amount
          <br />
          (negative-expense, positive-income)
        </label>
        <input
          type="number"
          id="transaction-amount"
          placeholder="Enter amount..."
        />
        <button type="button">Add transaction</button>
      </form>
    </div>
  );
};

export default Transaction;
