function StateComponent01(props){
  let num = 0;
  function updateNum() {
    num += 1;
    console.log(num);
  }
  return (
    <div className="area">
      <h3>{ num }</h3>
      <button onClick={ updateNum }>{ props.msg }</button>
    </div>
  )
}
export default StateComponent01;