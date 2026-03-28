import "./App.css";
import DiceRoller from "./DiceRoller";
import DateTracker from "./DateTracker";
import NationSheet from "./NationSheet";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addNation, removeNation } from "./slices/nationsSlice";

function App() {
  const nations = useAppSelector((state) => state.nations.nations);
  const dispatch = useAppDispatch();

  const nationSheets = nations.map((nation) => (
    <NationSheet
      key={nation.id}
      id={nation.id}
      onDelete={() => {
        dispatch(removeNation(nation.id));
      }}
    />
  ));

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
        <button onClick={() => dispatch(addNation())}>+</button>
      </section>
    </>
  );
}

export default App;
