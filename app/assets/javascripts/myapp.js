import React from "react"
import {createStore} from "redux"
import rootReducer from "./reducers/root"
import Root from "./components/Root"

class MyApp extends React.Component{
  render(){
    let store = createStore(rootReducer)

    return (
      <Root store={store} />
    )
  }
}

export default MyApp
