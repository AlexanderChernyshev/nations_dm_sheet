import "./App.css";
import DiceRoller from "./DiceRoller";

function App() {
  return (
    <>
      <h1>Nations DM/GM Sheet</h1>
      <section className="top-tools">
        <DiceRoller />
      </section>

      <section className="nations-sheet">
        <h2>Nations</h2>
        <button>+</button>
      </section>
    </>
  );
}

export default App;
