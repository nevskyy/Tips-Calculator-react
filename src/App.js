import "./styles.css";
import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(5);
  const [percentage2, setPercentage2] = useState(5);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(5);
    setPercentage2(5);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service? :{" "}
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service? :{" "}
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="">How much was the bill? : </label>
      <input
        type="text"
        placeholder="Enter bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      {children}
      <select
        name=""
        id=""
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amaizing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip})
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    <button
      style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}
      onClick={onReset}
    >
      Reset
    </button>
  );
}
