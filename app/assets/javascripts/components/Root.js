import React from "react"
import {Provider} from "react-redux"
import { BrowserRouter as Router, Route} from "react-router-dom"
import App from "./App"
import Top from "./Top"
import About from "./About"
import Contact from "./Contact"
import CCounter from "../containers/CCounter"

const Root = ({store}) => {


  return (
    <Provider store={store}>
      <Router>
        <App>
          <Route component={({match}) =>
            <div>
              <Route path="/myapp/index" component={Top} />
              <Route path="/myapp/about" component={About} />
              <Route path="/myapp/contact" component={Contact} />
              <Route path="/myapp/counter" component={CCounter} />
            </div>
          }/>
        </App>
      </Router>
    </Provider>
  )
}

export default Root
