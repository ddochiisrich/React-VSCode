import './App.css';
import Member from './map/MapComponent02.js'

function App() {

  const members = [
    {id : "hong", name : "홍진호", age: 22},
    {id : "leem", name : "임요한", age: 11},
    {id : "chu", name : "추사랑", age: 7}];

  return (
    <div className="App">
      {/* map() 직접출력 */}
      <ul>
        {
          members.map((members, index) => (<li key={members.id}>{members.id} - {members.name} - {members.age}</li>))
        }
      </ul>
      {/* map() 함수에서 컴포넌트를 사용  */}
      <ul>
        {
          members.map((member, index) => <Member key={member.id} {...member}/>)
        }
      </ul>
    </div>
  );
}
export default App;
