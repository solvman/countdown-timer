import BreakLength from "./features/breaklength/BreakLength";
import SessionLength from "./features/sessionlength/SessionLength";
import Session from "./features/session/Session";

function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="length-container">
        <BreakLength />
        <SessionLength />
      </div>
      <Session />
    </div>
  );
}

export default App;
