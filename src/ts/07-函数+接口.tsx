

import React, { Component } from 'react'
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source, subString) {
  let result = source.search(subString);
  return result > -1;
}

console.log(mySearch("hello",'he'));

export default class Demo extends Component {
  
  render() {
    return (
      <div>Demo</div>
    )
  }
}
