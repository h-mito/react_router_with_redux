import React from "react"
import {Link} from "react-router"

class App extends React.Component {

  render(){
    return (
      <div className="app">
        <h1>This is React Redux ReactRouter App</h1>
        <div>
          <div className="menus">
            <div className="menu">
              <Link to="/myapp/index" onlyActiveOnIndex activeClassName="active">Top</Link>
            </div>
            <div className="menu">
              <Link to="/myapp/counter" activeClassName="active">Counter</Link>
            </div>
            <div className="menu">
              <Link to="/myapp/about" activeClassName="active">About</Link>
            </div>
            <div className="menu">
              <Link to="/myapp/contact" activeClassName="active">Contact</Link>
            </div>
          </div>
        </div>
        <div className="clear">
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App
