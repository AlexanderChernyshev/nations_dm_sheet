import Pop from "./Pop";

function Population() {
  return (
    <section className="population-field">
      <p>Population</p>
      <div className="pops-grid">
        <Pop />
        <Pop />
        <Pop />
      </div>
    </section>
  );
}

export default Population;
