import './App.css';
import { ElementProperty01 as Elem01, ElementProperty02 as Elem02 } from './jsx/JSXBase03.js'

function App() {
  return (
    <div className="App">
      <Elem01 title = "카멜 표기법" />
      <Elem02 msg = "인라인 스타일 적용하기" />
    </div>
  );
}

export default App;
