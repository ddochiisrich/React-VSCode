import Child from './ChildComponent.js'

const ParentComponent = (props) => {
  return(
    <div className="parent">
      <h2>여기는 부모 컴포넌트</h2>
      <div>
        <h3>{props.title}</h3>
        <ul>
          <Child name="FirstChild" />
          <Child name="SecondChild" />
        </ul>
      </div>
    </div>
  );
}

export default ParentComponent;