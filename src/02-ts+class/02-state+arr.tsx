import React, { Component } from 'react'
interface IState {
  str:string,
  list:string[]
}
export default class Demo extends Component<any,IState> {
  state ={
    str:'hello',
    list:[]
  }
  render() {
    return (
      <div>
        <input value={this.state.str} onChange={(e)=>{this.setState({
          str:e.target.value
        })}}></input>
        
        <button onClick={()=>{
          this.setState({
            list:[...this.state.list,this.state.str],
            str:''
          })
        }}> add </button>
        <div>
          <ul>
            {
              this.state.list.map((item,index)=><li key={index}>{item}
              <button onClick={()=>{
                let list=[...this.state.list]
                list.splice(index,1)
                this.setState({
                  list:list
                })
              }}>del</button>
              </li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}
