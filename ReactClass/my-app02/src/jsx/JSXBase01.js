import {Fragment} from "react";

// export function JSXBase01() {
//   return (
//     <div>JSXBase01</div>
//     <div>JSXBase02</div>
//   );
// }

export function JSXBase02() {
  return (
    <div>
      <div>JSXBase01</div>
      <div>JSXBase02</div>
    </div>
  );
}

export function JSXBase03() {
  return (
    <Fragment>
      <div>JSXBase01</div>
      <div>JSXBase02</div>
    </Fragment>
  );
}

export function JSXBase04() {
  return (
    <>
      <div>JSXBase01</div>
      <div>JSXBase02</div>
    </>
  );
}