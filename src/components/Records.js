import RecordsCard from "./RecordsCard";

const Records = ({ transactions, handleDelete }) => {
  const transactionsComponents = transactions.map((transaction) => (
    <RecordsCard
      key={transaction.id}
      type={transaction.type}
      text={transaction.text}
      amount={transaction.amount}
      handleDelete={() => handleDelete(transaction.id)}
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
