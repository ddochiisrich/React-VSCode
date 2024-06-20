import './App.css';
import Member from './map/MapComponent02.js'

function App() {
  const members = [
    {id:"hong", name:"홍길동", age:12}, 
    {id: "leem", name:"임꺽정", age:42}, 
    {id:"ofjkw", name:"어머나", age:123}
  ];

  return(
    <div className="App">
      <ul>
        {
          members.map((member, index) =>
          <li key={member.id}>{member.id} - {member.name}({member.age})</li>)
        }
      </ul>
      <ul>
        {
          members.map((member, index) => <Member key={member.id} {...member}/>)
     
        }
      </ul>
    </div>
  )
}

export default App;
