import React from "react"

const Counter = ({counter, onIncrement, onDecrement}) =>{
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

    </div>
  )
}

export default Counter
