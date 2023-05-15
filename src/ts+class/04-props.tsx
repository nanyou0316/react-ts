import React, { Component, Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <Son name='hello'></Son>
      </div>
    )
  }
}
interface IProps {
  name:string
}
class Son extends Component<IProps,any> {
  render () {
    return <Fragment>
      <h2>son组件
        <p>{this.props.name}</p>
      </h2>
    </Fragment>
  }
}