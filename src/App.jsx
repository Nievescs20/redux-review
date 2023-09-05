import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deposit, withdrawal, transfer } from "./store/bankSlice";

function App() {
  const reducer = useSelector((state) => state.transactions);

  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);

  const dispatch = useDispatch();
  console.log("reducer", reducer);

  return (
    <div>
      <h1>{reducer.balance}</h1>
      <div>
        {reducer.history.map((transaction, idx) => (
          <div key={idx}>
            <h1>{transaction.type}</h1>
            <h1>{transaction.amount}</h1>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(deposit(50))}>Deposit</button>
      <button onClick={() => dispatch(withdrawal(50))}>Withdraw</button>
      <input onChange={(e) => setTransferTo(e.target.value)} />
      <input onChange={(e) => setTransferAmount(e.target.value)} />
      <button
        onClick={() =>
          dispatch(
            transfer({
              name: transferTo,
              amount: transferAmount,
            })
          )
        }
      >
        Transfer
      </button>
    </div>
  );
}

export default App;
