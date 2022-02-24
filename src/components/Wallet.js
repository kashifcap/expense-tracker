const Wallet = ({ income, expense }) => {
  return (
    <div className="wallet">
      <div className="wallet-info">
        <div className="wallet-info--income">
          <p className="wallet-info-title">Income</p>
          <p className="wallet-info-amount">${income}</p>
        </div>
        <div className="wallet-info--expense">
          <p className="wallet-info-title">Expense</p>
          <p className="wallet-info-amount">${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
