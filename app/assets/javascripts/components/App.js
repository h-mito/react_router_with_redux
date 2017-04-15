import React from "react"
import {NavLink} from "react-router-dom"

class App extends React.Component {

  render(){
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
        {this.props.children}
      </div>
    )
  }
}

export default App
