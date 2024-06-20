import { useState, useEffect } from 'react';

function EffectComponent03(props) {

  const [num, setNum] = useState(0);
  const incrementNum = () => setNum(num + 1);

  useEffect(() => {
    console.log("screen is render")
  }, [])

  return (
    <div className="area">
      <h3> {props.name} - {num}</h3>
      <button onClick={incrementNum}>click me!</button>
    </div>
  );
}
export default EffectComponent03;
