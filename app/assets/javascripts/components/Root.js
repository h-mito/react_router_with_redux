import React from "react"
import {Provider} from "react-redux"
import { Router , Route, IndexRoute, browserHistory} from "react-router"
import App from "./App"
import Top from "./Top"
import About from "./About"
import Contact from "./Contact"
import CCounter from "../containers/CCounter"

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App} path="/myapp/index" >
          <IndexRoute component={Top} />
          <Route path="/myapp/about" component={About} />
          <Route path="/myapp/contact" component={Contact} />
          <Route path="/myapp/counter" component={CCounter} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
