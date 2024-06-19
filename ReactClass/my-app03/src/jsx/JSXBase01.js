import { Fragment } from 'react';

// export function JSXBase01(){
//   return (
//       <div>JSXBase01-1</div>
//       <div>JSXBase01-2</div>
//   );
// }

export function JSXBase02(){
  return (
    <div>
      <div>JSXBase02-1</div>
      <div>JSXBase02-2</div>
    </div>  
  );
}

export function JSXBase03(){
  return (
    <Fragment>
      <div>JSXBase03-1</div>
      <div>JSXBase03-2</div>
    </Fragment>  
  );
}

export function JSXBase04(){
  return (
    <>
      <div>JSXBase04-1</div>
      <div>JSXBase04-2</div>
    </>  
  );
}