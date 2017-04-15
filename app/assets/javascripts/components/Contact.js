import React from "react"

const Contact = ({history}) => {
  return (
    <div>
      <h2>This is Contact Page</h2>

      <br /><br />
      <button onClick={(e) => history.goBack()}>
        Back to History
      </button>
    </div>
  )
}

export default Contact
