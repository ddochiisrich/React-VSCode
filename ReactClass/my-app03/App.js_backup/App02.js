import './App.css';
import ParentComponent from "./components/ParentComponent.js"

function App() {
  return (
    <div className="App">
      <ParentComponent title = "자식리스트" />
    </div>
  );
}

export default App;
