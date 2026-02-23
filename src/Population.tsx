import Pop from "./Pop";
import { useState } from "react";

function Population() {
  function getRandID() {
    const min: number = 1;
    const max: number = 999;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const [popsList, setPopsList] = useState([
    getRandID(),
    getRandID(),
    getRandID(),
  ]);

  const pops = popsList.map((id) => (
    <Pop
      key={id}
      onDelete={() => {
        deleteSheet(id);
      }}
    />
  ));

  function addPop() {
    setPopsList([...popsList, getRandID()]);
  }

  function deleteSheet(activeID: number) {
    const newArr = popsList.filter((id) => id !== activeID);
    setPopsList(newArr);
  }

  return (
    <section className="population-field">
      <p>Population</p>
      <div className="pops-grid">
        {pops}
        <button onClick={addPop}>+</button>
      </div>
    </section>
  );
}

export default Population;
