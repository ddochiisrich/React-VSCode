import { useState } from 'react'

const EffectComponent01 = (props) => {
  const [num, setNum] = useState(0)
  setNum(num + 1);
  console.log("화면이 렌더링 됨")

  return (
    <div>
      <h3>{ props.name } - { num }</h3>
    </div>
  )
}

export default EffectComponent01;