function Application () {
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>Scoreboard</h1>
      </div>

    </div>
  )// end return
} // function Application

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Application />, document.getElementById("root"))
});
