import React from "react"

const Counter = ({counter, onIncrement, onDecrement, history}) => {

  return (
    <div>
      <button onClick= {(e) => onIncrement()}>
        Count Up
      </button>
      <button onClick= {(e) => onDecrement()}>
        Count Down
      </button>
      <br /><br />
      <h2>Counter = {counter}</h2>

      <button onClick= {(e) => history.push('/myapp/contact')}>
        Go To Contact
      </button>

    </div>
  )
}

export default Counter
