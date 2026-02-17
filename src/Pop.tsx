function Pop() {
  return (
    <div className="pop">
      <button className="pop-portrait">
        <img></img>
      </button>
      <input type="text" placeholder="Name" id="pop-name"></input>
      <input type="number" placeholder="Count" id="pop-count"></input>
      <button>Delete</button>
    </div>
  );
}

export default Pop;
