import { type FlagInfo, flagsData } from "./types.ts";
import { Flag } from "./Flag.tsx";
import Population from "./Population.tsx";
import { useAppDispatch, useAppSelector } from "./hooks.ts";
import { setColor, setFlagId, setName } from "./slices/nationsSlice.ts";

function NationSheet({ id, onDelete }: { id: number; onDelete: () => void }) {
  const dispatch = useAppDispatch();
  const nation = useAppSelector((state) =>
    state.nations.nations.find((n) => n.id === id)
  );

  if (!nation) return null;

  const selectedFlag =
    flagsData.find((f) => f.id === nation.flagId) || null;

  const handleFlagSelected = (flag: FlagInfo) => {
    dispatch(setFlagId({ id, flagId: flag.id }));
  };

  return (
    <section className="nation-sheet">
      <div className="nation-sheet-header">
        <Flag onFlagSelected={handleFlagSelected} selectedFlag={selectedFlag} />
        <section className="nation-name">
          <p>Name</p>
          <input
            type="text"
            value={nation.name}
            onChange={(e) => dispatch(setName({ id, name: e.target.value }))}
          ></input>
        </section>
        <section className="nation-color">
          <p>Color</p>
          <input
            type="color"
            value={nation.color}
            onChange={(e) => dispatch(setColor({ id, color: e.target.value }))}
          ></input>
        </section>
        <Population />
      </div>
      <button onClick={onDelete}>delete</button>
    </section>
  );
}

export default NationSheet;
