import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { State } from "./state/reducers";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { deposit, withdraw, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => deposit(100)}>Deposit</button>
      <button onClick={() => withdraw(100)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
