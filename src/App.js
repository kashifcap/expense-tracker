import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Records from "./components/Records";
import Transaction from "./components/Transaction";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleDelete = (id) => {
    const transaction = transactions.find((t) => t.id === id);
    if (!transaction) return;
    if (transaction.type === "income") {
      setIncome((prev) => prev - transaction.amount);
    } else {
      setExpense((prev) => prev - transaction.amount);
    }
    setAmount((prev) => prev - transaction.amount);
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <Header />
      <Main amount={amount} income={income} expense={expense} />
      <Records transactions={transactions} handleDelete={handleDelete} />
      <Transaction
        setTransactions={setTransactions}
        setAmount={setAmount}
        setIncome={setIncome}
        setExpense={setExpense}
      />
    </>
  );
}

export default App;
