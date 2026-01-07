import { useRef } from "react";

export type FlagInfo = {
  id: number;
  name: string;
  url: string;
};

export const unalignedFlag: FlagInfo = {
  id: 1,
  name: "unaligned flag",
  url: "/unaligned_flag_dmsheet.svg",
};

export const flagsData: FlagInfo[] = [
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

export function Flag({
  selectedFlag,
  onFlagSelected,
}: {
  selectedFlag: FlagInfo | null;
  onFlagSelected: Function;
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
