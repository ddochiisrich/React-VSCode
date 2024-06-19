import './App.css';
import { WelcomeClass, WelcomeFunction } from './components/Welcome.js'

function App() {
  return (
    <div className="App">
      <WelcomeClass name = "React" />
      <WelcomeFunction name = "React" />
    </div>
  );
}

export default App;
