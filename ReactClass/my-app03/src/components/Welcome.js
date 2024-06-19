import React from 'react';

export class WelcomeClass extends React.Component{
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
} 

export function WelcomeFunction(props){
  return <h1>Hello, {props.name}</h1>
}