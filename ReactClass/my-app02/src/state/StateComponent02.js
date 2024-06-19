import React from 'react';

function StateComponent02(props) {

  const state = React.useState();
  console.log(state);

  let num = 0;
  function updateNum() {
    num += 1;
    console.log(num);
  }

  return (
    <div className="area">
      <h3> { num } </h3>
      <button onClick={ updateNum }>{ props.msg }</button>
    </div>
  );
}
export default StateComponent01;
