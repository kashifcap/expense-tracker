const RecordsCard = ({ type, text, amount }) => {
  return (
    <div className="records-card">
      <p className="records--text">{text}</p>
      <p className="records--amount">{amount}</p>
      <p
        className={`records--flag records--flag-${
          type === "income" ? "income" : "expense"
        }`}
      ></p>
      <button type="button" className="delete-button">
        Del
      </button>
    </div>
  );
};

export default RecordsCard;
