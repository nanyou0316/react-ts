

import React, { Component } from 'react'
interface IFunc{
  getName:()=>string
}
class A implements IFunc{
  a1(){}
  a2(){}
  getName(){
    return 'aaa'
  }
}
class B implements IFunc{
  b1(){}
  b2(){}
  getName(){
    return 'bbb'
  }
}
function init(obj:IFunc){
  obj.getName()
}
var objA=new A()
var objB=new B()
init(objA)
init(objB)

export default class Demo extends Component {
  
  render() {
    return (
      <div>Demo</div>
    )
  }
}
