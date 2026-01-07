import { useState } from "react";
import { type FlagInfo, Flag } from "./Flag.tsx";

function NationSheet() {
  const [flag, setFlag] = useState<FlagInfo | null>(null);

  return (
    <section className="nation-sheet">
      <Flag onFlagSelected={setFlag} selectedFlag={flag} />
      <section className="nation-name">
        <p>Name</p>
        <input type="text"></input>
      </section>
      <section className="nation-color">
        <p>Color</p>
        <input type="color"></input>
      </section>
    </section>
  );
}

export default NationSheet;
