import Navbar from "./component/navbar";
import Counters from "./component/counters";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </div>
  );
}

export default App;
