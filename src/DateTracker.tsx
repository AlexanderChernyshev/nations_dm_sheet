import { useDispatch } from "react-redux";
import { setYear, setMonth, setDay } from "./slices/dateSlice";
import { useAppSelector } from "./hooks";

function DateTracker() {
  const { day, month, year } = useAppSelector((state) => state.date);
  const dispatch = useDispatch();

  return (
    <>
      <section className="date-tracker">
        <section className="date-tracker-years">
          <p>Year</p>
          <input
            type="number"
            value={year}
            onChange={(e) => dispatch(setYear(parseInt(e.target.value)))}
          ></input>
        </section>
        <section className="date-tracker-months">
          <p>Month</p>
          <input
            type="text"
            value={month}
            onChange={(e) => dispatch(setMonth(e.target.value))}
          ></input>
        </section>
        <section className="date-tracker-days">
          <p>Day</p>
          <input
            type="number"
            min="1"
            max="31"
            value={day}
            onChange={(e) => dispatch(setDay(parseInt(e.target.value)))}
          ></input>
        </section>
      </section>
    </>
  );
}

export default DateTracker;
