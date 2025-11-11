function DateTracker() {
  return (
    <>
      <section className="date-tracker">
        <section className="date-tracker-years">
          <p>Year</p>
          <input type="number"></input>
        </section>
        <section className="date-tracker-months">
          <p>Month</p>
          <input type="text"></input>
        </section>
        <section className="date-tracker-days">
          <p>Day</p>
          <input type="number" min="1" max="31"></input>
        </section>
      </section>
    </>
  );
}

export default DateTracker;
