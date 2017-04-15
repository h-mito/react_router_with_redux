import React from "react"
import {Route, Link} from "react-router-dom"

import About2 from "./About2"
import About3 from "./About3"

const About = ({match}) => {
  return (
    <div>
        <h2>Abouts</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${match.url}/` + "rendering"} component={About3}/>
        <Route path={`${match.url}/:aboutId`} component={About2}/>
        <Route exact path={match.url} render={() => (
          <h3>Please select a about.</h3>
        )}/>
    </div>

  )
}

export default About
