import "./App.css";
import Counter from "./pages/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      {/* <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a> */}
    </div>
  );
}

export default App;
