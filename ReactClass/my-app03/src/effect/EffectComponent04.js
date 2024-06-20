import { useState, useEffect } from 'react'

const EffectComponent04 = (props) => {
  const [ num, setNum ] = useState(0);
  const [ name, setName ] = useState(props.name);
  const incrementNum = () => setNum(num + 1);
  const updateName = () => setName(name + num);

  useEffect(() => {
    console.log("화면이 렌더링 됨", num, name);
  }, [name]);

  return (
    <div>
      <h3>{ name } - { num }</h3>
      <button onClick={incrementNum}>숫자증가</button>
      <button onClick={updateName}>이름변경</button>
    </div>
  );
}
export default EffectComponent04;