import './App.css';
import { WelcomeClass, WelcomeFunction } from "./components/welcome.js"

function App() {
  return (
    <div className="App">
      <WelcomeClass name="React Class"/>
      <WelcomeFunction name="React Function" />
    </div>
  );
}

export default App;
