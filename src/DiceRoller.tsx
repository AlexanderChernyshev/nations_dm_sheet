import { useState } from "react";
import RollInterface from "./RollInterface.tsx";

function DiceRoller() {
  return (
    <>
      <section className="dice-interface">
        <RollInterface />
        <RollInterface />
      </section>
    </>
  );
}

export default DiceRoller;
