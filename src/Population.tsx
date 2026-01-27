import Pop from "./Pop";

function Population() {
  return (
    <section className="population-field">
      <p>Population</p>
      <div className="pops-grid"></div>
      <Pop />
      <Pop />
      <Pop />
    </section>
  );
}

export default Population;
