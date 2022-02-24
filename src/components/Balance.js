const Balance = ({ amount }) => {
  return (
    <div className="balance">
      <h3 className="balance-header">Your Balance</h3>
      <h2 className="balance-amount">${amount}</h2>
    </div>
  );
};

export default Balance;
