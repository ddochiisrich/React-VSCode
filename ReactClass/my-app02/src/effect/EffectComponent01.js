import { useState } from 'react';

function EffectComponent01(props) {

  const [num, setNum] = useState(0);

  setNum(num + 1);
  console.log("screen is rendered")

  return (
    <div className="area">
      <h3> {props.name} - {num}</h3>
    </div>
  );
}
export default EffectComponent01;
