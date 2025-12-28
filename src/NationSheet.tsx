import { useRef } from "react";

function NationSheet() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function openFlags() {
    dialogRef.current?.showModal();
  }

  function closeFlags() {
    dialogRef.current?.close();
  }

  return (
    <section className="nation-sheet">
      <section className="flag-selector">
        <p>Flag</p>
        <button onClick={openFlags} className="flags-dialog-button">
          <img src="/nations_dm_sheet_flags_01.svg" />
        </button>
        <dialog ref={dialogRef}>
          <button autoFocus onClick={closeFlags}>
            Close
          </button>
          <img src="/nations_dm_sheet_flags_01.svg" />
          <img src="/nations_dm_sheet_flags_02.svg" />
          <img src="/nations_dm_sheet_flags_03.svg" />
          <img src="/nations_dm_sheet_flags_04.svg" />
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
