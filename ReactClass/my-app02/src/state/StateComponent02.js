import React from 'react';

function StateComponent02(props) {

  const [num, setNum] = React.useState(0);

  function updateNum() {
    setNum(num + 1);
    console.log(num);
  }

  return (
    <div className="area">
      <h3> You clicked { num }  times</h3>
      <button onClick={ updateNum }>{ props.msg }</button>
    </div>
  );
}
export default StateComponent02;
