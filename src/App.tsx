import "./App.css";
import DiceRoller from "./DiceRoller";
import DateTracker from "./DateTracker";
import NationSheet from "./NationSheet";
import NationSheetAddButton from "./NationSheetAddButton";
import { useState } from "react";

function App() {
  function getRandID() {
    const min: number = 1;
    const max: number = 999;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const [nationsSheetsList, setNationsSheetsList] = useState([
    getRandID(),
    getRandID(),
    getRandID(),
  ]);

  const nationSheets = nationsSheetsList.map((id) => <NationSheet key={id} />);

  function addSheet() {
    setNationsSheetsList([...nationsSheetsList, getRandID()]);
  }

  return (
    <>
      <h1>Nations DM/GM Sheet</h1>
      <section className="top-tools">
        <DiceRoller />
        <DateTracker />
      </section>

      <section className="nations-sheet">
        <h2>Nations</h2>
        {nationSheets}
        <button onClick={addSheet}>+</button>
      </section>
    </>
  );
}

export default App;
