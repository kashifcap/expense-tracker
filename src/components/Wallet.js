const Wallet = () => {
  return (
    <div className="wallet">
      <div className="wallet-info">
        <div className="wallet-info--income">
          <p className="wallet-info-title">Income</p>
          <p className="wallet-info-amount">$100.00</p>
        </div>
        <div className="wallet-info--expense">
          <p className="wallet-info-title">Expense</p>
          <p className="wallet-info-amount">$100.00</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
