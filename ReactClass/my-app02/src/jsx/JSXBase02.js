export function Expression01() {
  const msg = "Hi React JSX";
  const url = "/logo192.png"

  return (
    <div>
      <div>{ msg }</div>
      <img src={ url } />
      <a href="http://www.naver.com"> 네이버 가기 </a>
    </div>
  )
}

export function Expression02() {
  const mem = { id : "DDOCHI", pass : "1234" };

  function getMessage(name){
    return <h3>Hi { name }</h3>;
  }

  return (
    <>
      <div>{ mem.id } - { mem.pass }</div>
      <div>{ getMessage("홍길동")}</div>
    </>
  )
}

export function Expression03() {
  let msg = "";
  const isLogin = true;

  if(isLogin == true){
    msg = <h3>안녕하세유 고객님~ 오셧슈~</h3>
  } else {
    msg = <h3>로그인이 필요한 서비스에유~</h3>
  }

  return (
    <>
      { msg }
    </>
  )
}

export function Expression04() {
  const isLogin = false;

  return (
    <>
      { isLogin ? <h3> 안녕하세요 고객님 </h3> : <h3> 로그인이 필요합니다 </h3>}
    </>
  )
}