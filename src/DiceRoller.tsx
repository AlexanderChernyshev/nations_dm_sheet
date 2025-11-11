import RollInterface from "./RollInterface.tsx";

function DiceRoller() {
  return (
    <>
      <section className="dice-roller">
        <h2>Dice Roller</h2>
        <section className="dice-interface">
          <RollInterface />
          <RollInterface reverse />
        </section>
      </section>
    </>
  );
}

export default DiceRoller;
