

import React, { Component } from 'react'
interface IObj{
  name:string,
  age:number,
  address?:string|number,    //?代表可选，有或者没有
  [propName:string|number]:any    //其他我们不知道的属性，返回值我们也不关心，有点像占位的意思
}
let obj:IObj={
  name:'zhangsan',
  age:18,
  address:'hahahhahahahahhaah',
  aa:'aaa',
  bb:'bbb',
  1:'123'
  
}
console.log(obj);

export default class Demo extends Component {
  
  render() {
    return (
      <div>Demo</div>
    )
  }
}
