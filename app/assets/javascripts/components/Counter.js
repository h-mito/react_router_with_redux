import React from "react"

class Counter extends React.Component {

  handleClick() {
    this.props.history.push('/myapp/contact');
  }

  render(){
    let counter = this.props.counter
    let onIncrement = this.props.onIncrement
    let onDecrement = this.props.onDecrement

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

        <button onClick= {(e) => this.handleClick()}>
          Go To Contact
        </button>

      </div>
    )
  }
}

export default Counter
