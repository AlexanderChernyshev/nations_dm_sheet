import { useState } from "react";

function RollInterface({ reverse }: { reverse?: boolean }) {
  const [modifier, setModifier] = useState(0);

  const [total, setTotal] = useState(0);

  function handleModifierInput(event: React.ChangeEvent<HTMLInputElement>) {
    setModifier(Number(event.target.value));
  }

  function calcTotal() {
    const roll = Math.floor(Math.random() * 100) + 1;
    const total = roll + modifier;

    setTotal(total);
  }

  function reset() {
    setModifier(0);
    setTotal(0);
  }

  return (
    <section className={`roll-interface ${reverse ? "reverse" : ""}`}>
      <button onClick={reset}>Reset</button>
      <button onClick={calcTotal}>Roll</button>
      <section className="modifier">
        <h3>Modifier</h3>
        <input type="number" onChange={handleModifierInput}></input>
      </section>
      <section className="total">
        <h3>Total</h3>
        <p>{total}</p>
      </section>
    </section>
  );
}

export default RollInterface;
