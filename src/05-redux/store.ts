import { legacy_createStore as createStore } from 'redux'
interface IAction {
  type: string,
  payload?:any
}
const init = {
  flag: true,
}
const reducer = (prevState = init, action: IAction) => {
  let newSate = { ...prevState }
  const { type } = action
  switch (type) {
    case 'show':
      newSate.flag = true
      return newSate
    case 'hide':
      newSate.flag = false
      return newSate
    default:
      return prevState
  }
}
const store = createStore(reducer)
export default store
