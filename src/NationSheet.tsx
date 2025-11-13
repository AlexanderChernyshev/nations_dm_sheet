function NationSheet() {
  return (
    <section className="nation-sheet">
      <section className="flag-selector">
        <p>Flag</p>
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
