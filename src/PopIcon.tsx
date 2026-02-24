import { useRef } from "react";
import { type PopIconInfo, popIconsData, defaultPopIcon } from "./types";

export function PopIcon({
  selectedIcon,
  onIconSelected,
}: {
  selectedIcon: PopIconInfo | null;
  onIconSelected: (icon: PopIconInfo) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function openIcons() {
    dialogRef.current?.showModal();
  }

  function closeIcons() {
    dialogRef.current?.close();
  }

  function handleIconSelection(icon: PopIconInfo) {
    dialogRef.current?.close();
    onIconSelected(icon);
  }

  return (
    <div className="pop-icon-selector">
      <button onClick={openIcons} className="pop-portrait">
        {selectedIcon?.emoji ?? defaultPopIcon.emoji}
      </button>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={closeIcons}>
          Close
        </button>
        <div className="pop-icon-grid">
          {popIconsData.map((icon) => (
            <button
              key={icon.id}
              onClick={() => handleIconSelection(icon)}
              className="pop-icon-select-button"
            >
              {icon.emoji}
            </button>
          ))}
        </div>
      </dialog>
    </div>
  );
}
