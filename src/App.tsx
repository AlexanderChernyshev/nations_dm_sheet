import "./App.css";
import DiceRoller from "./DiceRoller";
import DateTracker from "./DateTracker";
import NationSheet from "./NationSheet";

function App() {
  return (
    <>
      <h1>Nations DM/GM Sheet</h1>
      <section className="top-tools">
        <DiceRoller />
        <DateTracker />
      </section>

      <section className="nations-sheet">
        <h2>Nations</h2>
        <NationSheet />
        <NationSheet />
        <NationSheet />
        <button>+</button>
      </section>
    </>
  );
}

export default App;
