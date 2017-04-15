import React from "react"
import {NavLink, withRouter} from "react-router-dom"

class App extends React.Component {

  render(){
    console.log(this.props.location.pathname)

    return (
      <div className="app">
        <h1>This is React Redux ReactRouter App</h1>
        <div>
          <ul className="menus">
            <li><NavLink to="/myapp/index" activeClassName="active">Top</NavLink></li>
            <li><NavLink to="/myapp/counter" activeClassName="active">Counter</NavLink></li>
            <li><NavLink to="/myapp/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/myapp/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </div>
        <div className="clear">
        </div>
        <div className="contents">
          {this.props.children}
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
}

export default withRouter(App)
