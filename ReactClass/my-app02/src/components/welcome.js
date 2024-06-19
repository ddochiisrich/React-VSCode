import React from 'react';

// 클래스 컴포넌트
export class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

// 함수 컴포넌트
export function WelcomeFunction(props) {
  return <h1>Hello, {props.name}</h1>
}