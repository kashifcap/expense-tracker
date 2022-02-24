import RecordsCard from "./RecordsCard";

const Records = ({ transactions }) => {
  const transactionsComponents = transactions.map((transaction) => (
    <RecordsCard
      type={transaction.type}
      text={transaction.text}
      amount={transaction.amount}
    />
  ));
  return (
    <div className="records">
      <h3 className="records-title pb-5">History</h3>
      <div className="records-details">
        {transactionsComponents.length ? (
          transactionsComponents
        ) : (
          <p>No history, add some transactions!</p>
        )}
      </div>
    </div>
  );
};

export default Records;
