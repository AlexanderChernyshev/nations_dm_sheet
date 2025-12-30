import { useRef, useState } from "react";

type Flag = {
  id: number;
  name: string;
  url: string;
};

function NationSheet() {
  const unalignedFlag: Flag = {
    id: 1,
    name: "unaligned flag",
    url: "/unaligned_flag_dmsheet.svg",
  };

  const flagsData: Flag[] = [
    unalignedFlag,
    {
      id: 2,
      name: "flag1",
      url: "/nations_dm_sheet_flags_01.svg",
    },
    {
      id: 3,
      name: "flag2",
      url: "/nations_dm_sheet_flags_02.svg",
    },
    {
      id: 4,
      name: "flag3",
      url: "/nations_dm_sheet_flags_03.svg",
    },
    {
      id: 5,
      name: "flag4",
      url: "/nations_dm_sheet_flags_04.svg",
    },
  ];

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
