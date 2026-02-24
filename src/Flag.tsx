import { useRef } from "react";
import { type FlagInfo, flagsData, unalignedFlag } from "./types";

export function Flag({
  selectedFlag,
  onFlagSelected,
}: {
  selectedFlag: FlagInfo | null;
  onFlagSelected: (flag: FlagInfo) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function openFlags() {
    dialogRef.current?.showModal();
  }

  function closeFlags() {
    dialogRef.current?.close();
  }

  function handleFlagSelection(flag: FlagInfo) {
    dialogRef.current?.close();
    onFlagSelected(flag);
  }

  return (
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
            key={flag.name}
            onClick={() => handleFlagSelection(flag)}
            className="flag-select-button"
          >
            <img src={flag.url} />
          </button>
        ))}
      </dialog>
    </section>
  );
}
