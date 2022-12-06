import Navbar from "./component/navbar";
import Counters from "./component/counters";
import "./App.css";
import Additions from "./component/Additions";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        {/* <Counters /> */}
        <Additions />
      </main>
    </div>
  );
}

export default App;
