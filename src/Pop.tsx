import { useState } from "react";
import { PopIcon } from "./PopIcon";
import { type PopIconInfo } from "./types";

function Pop({ onDelete }: { onDelete: () => void }) {
  const [icon, setIcon] = useState<PopIconInfo | null>(null);

  return (
    <div className="pop">
      <PopIcon selectedIcon={icon} onIconSelected={setIcon} />
      <input type="text" placeholder="Name" id="pop-name"></input>
      <input type="number" placeholder="Count" id="pop-count"></input>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Pop;
