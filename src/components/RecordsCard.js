const RecordsCard = () => {
  return (
    <div className="records-card">
      <p className="records--text">Card</p>
      <p className="records--amount">+200</p>
      <p className="records--flag records--flag-income"></p>
      <button type="button" className="delete-button">
        Del
      </button>
    </div>
  );
};

export default RecordsCard;
