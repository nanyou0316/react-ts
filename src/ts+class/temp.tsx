import React, { Component } from 'react'
interface IState {
  list:string[]
}
export default class Demo extends Component<any,IState> {
  state ={
    list:[]
  }
  myRef=React.createRef<HTMLInputElement>()
  render() {
    return (
      <div>
        <input ref={this.myRef}></input>
        
        <button onClick={()=>{
          this.setState({
            list:[...this.state.list,(this.myRef.current as HTMLInputElement).value]
          });
          (this.myRef.current as HTMLInputElement).value=''
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
