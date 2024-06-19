import './App.css';
import ParentComponent from "./components/ParentComponent.js"
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ParentComponent title = "자식리스트" />
      <Footer />
    </div>
  );
}

export default App;
