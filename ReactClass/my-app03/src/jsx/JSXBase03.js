export function ElementProperty01(props){
  return (
    <div className="primary">
      <h3>엘리먼트의 속성은 {props.title} 사용</h3>
      <label htmlFor="id">아이디 : </label>
      <input type="text" id="id" name="id" />
    </div>
  );
}

export function ElementProperty02(props){
    const style = {
      fontSize: '20px',
      backgroundColor: 'red',
      width: '300px',
      textAlign: 'center'
    }
    return (
      <>
        <p style={style}>{props.msg}</p>
      </>
    );
}