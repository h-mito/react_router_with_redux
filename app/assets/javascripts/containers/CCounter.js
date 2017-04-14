import {connect} from "react-redux"
import {counter_increment, counter_decrement} from "../actions/index"
import Counter from "../components/Counter"

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(counter_increment())
    },
    onDecrement: () => {
      dispatch(counter_decrement())
    }
  }
}

const CCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CCounter
