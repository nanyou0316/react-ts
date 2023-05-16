import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router' //这里是个坑，可能跟declaration.d.ts这个文件里面的内容有关，使用 react-router 代替 react-router-dom
import axios from 'axios'
import store from '../05-redux/store'
interface IParams {
  id: string
}
interface IInfo {
  info: {
    poster: string
    synopsis: string
  }
}
export default class Detail extends Component<RouteComponentProps<IParams>> {
  state: IInfo = {
    info: {
      poster: '',
      synopsis: '',
    },
  }
  componentDidMount() {
    store.dispatch({ type: 'hide' })
    // console.log(window.location.hash.split('/')[2]);
    // let id=window.location.hash.split('/')[2]
    console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    axios({
      url: 'https://m.maizuo.com/gateway?filmId=' + id + '&k=7004210',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"340800"}',
        'X-Host': 'mall.film-ticket.film.info',
      },
    }).then((res) => {
      console.log(res)
      this.setState({
        info: res.data.data.film,
      })
    })
  }
  componentWillUnmount() {
    store.dispatch({ type: 'show' })
  }
  render() {
    // console.log((this.props.match.params as any).id);
    console.log(this.props.match.params.id)

    const { info } = this.state
    return (
      <div>
        <img
          style={{ width: '200px' }}
          alt={info.poster}
          src={info.poster}
        ></img>
        <p>{info.synopsis}</p>
      </div>
    )
  }
}
