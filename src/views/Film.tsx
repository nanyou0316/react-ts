import React, { Component } from 'react'
import axios from 'axios'
import { RouteComponentProps } from "react-router"//这里是个坑，可能跟declaration.d.ts这个文件里面的内容有关，使用 react-router 代替 react-router-dom

 
interface IListItem {
  filmId:number,
  name:string
}
// interface IProps {}

// type HomeProps = IProps & RouteComponentProps;
export default class Film extends Component<RouteComponentProps> {
  state={
    list:[]
  }
  
  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=9024294',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"330100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then(res=>
      this.setState({
        list:res.data.data.films
    }))
  }
  render() {
    const {list} =this.state
    return (
      <div>
        <ul>
          {
            list.map((item:IListItem)=><li key={item.filmId} onClick={()=>{
              this.props.history.push('/detail/'+item.filmId)
            }}>{item.name}</li>)
          }
        </ul>
      </div>
    )
  }
}
