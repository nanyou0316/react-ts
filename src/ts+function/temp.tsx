import React, { Fragment } from 'react'

export default function Demo() {
  return (
    <div>Demo
      <Son msg='hello'></Son>
    </div>
  )
}
interface IProps {
  msg:string
}
// function Son (props:IProps) {
//   return <Fragment>
//     <h1>son组件</h1>
//     <h2>{props.msg}</h2>
//   </Fragment>
// }
const Son:React.FC<IProps>=(props)=>{
    return <Fragment>
    <h1>son组件</h1>
    <h2>{props.msg}</h2>
  </Fragment>
}