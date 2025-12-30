import { useRef, useState } from "react";
import { type Flag, unalignedFlag, flagsData } from "./Flag.tsx";

function NationSheet() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [selectedFlag, setFlag] = useState<Flag | null>(null);

  function openFlags() {
    dialogRef.current?.showModal();
  }

  function closeFlags() {
    dialogRef.current?.close();
  }

  function handleFlagSelection(flag: Flag) {
    setFlag(flag);
    dialogRef.current?.close();
  }

  return (
    <section className="nation-sheet">
      <section className="flag-selector">
        <p>Flag</p>
        <button onClick={openFlags} className="flags-dialog-button">
          <img src={selectedFlag?.url ?? unalignedFlag.url} />
        </button>
        <dialog ref={dialogRef}>
          <button autoFocus onClick={closeFlags}>
            Close
          </button>
          {flagsData.map((flag) => (
            <button
              onClick={() => handleFlagSelection(flag)}
              className="flag-select-button"
            >
              <img src={flag.url} />
            </button>
          ))}
        </dialog>
      </section>
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
