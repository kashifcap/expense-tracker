import RecordsCard from "./RecordsCard";

const Records = () => {
  return (
    <div className="records">
      <h3 className="records-title pb-5">History</h3>
      <div className="records-details">
        <RecordsCard />
        <RecordsCard />
        <RecordsCard />
        <RecordsCard />
        <RecordsCard />
      </div>
    </div>
  );
};

export default Records;
