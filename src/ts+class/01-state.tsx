import React, { Component } from 'react'
interface IState {
  name:string
}
export default class Demo extends Component<any,IState> {
  state ={
    name:'hello'
  }
  render() {
    return (
      <div>
        {
          <h1>{this.state.name}</h1>
          
        }
        <button onClick={()=>{
          this.setState({
            name:'123'
          })
        }}></button>
      </div>
    )
  }
}
