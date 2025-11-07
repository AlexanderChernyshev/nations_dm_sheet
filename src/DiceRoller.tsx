import { useState } from "react";

function DiceRoller() {
  const [leftModifier, setLeftModifier] = useState(0);
  const [rightModifier, setRightModifier] = useState(0);

  const [totalLeft, setTotalLeft] = useState(0);
  const [totalRight, setTotalRight] = useState(0);

  function handleLeftModifierInput(event: React.ChangeEvent<HTMLInputElement>) {
    setLeftModifier(Number(event.target.value));
  }

  function handleRightModifierInput(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setRightModifier(Number(event.target.value));
  }

  function calcTotalLeft() {
    const roll = Math.floor(Math.random() * 100) + 1;
    const total = roll + leftModifier;

    setTotalLeft(total);
  }

  function calcTotalRight() {
    const roll = Math.floor(Math.random() * 100) + 1;
    const total = roll + rightModifier;

    setTotalRight(total);
  }

  return (
    <>
      <section className="dice-interface">
        <button onClick={calcTotalLeft}>Roll</button>
        <section className="modifier">
          <h3>Modifier</h3>
          <input type="number" onChange={handleLeftModifierInput}></input>
        </section>
        <section className="total">
          <h3>Total</h3>
          <p>{totalLeft}</p>
        </section>
        <section className="total">
          <h3>Total</h3>
          <p>{totalRight}</p>
        </section>
        <section className="modifier">
          <h3>Modifier</h3>
          <input type="number" onChange={handleRightModifierInput}></input>
        </section>
        <button onClick={calcTotalRight}>Roll</button>
      </section>
    </>
  );
}

export default DiceRoller;
