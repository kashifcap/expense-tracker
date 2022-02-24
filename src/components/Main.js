import Balance from "./Balance";
import Wallet from "./Wallet";

const Main = ({ amount, income, expense }) => {
  return (
    <div className="main">
      <Balance amount={amount} />
      <Wallet income={income} expense={expense} />
    </div>
  );
};

export default Main;
