import React from 'react'
import { connect } from 'dva'
function Counter(props) {
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.onDecrease}> - </button>
            <button onClick={props.onIncrease}> + </button>
        </div>
    )
}

function mapState2Props(state) {
    return state
}

function mapDispatch2Props(dispatch) {
    return {
        onIncrease() {
            dispatch({
                type: "counter/increase"
            })
        },
        onDecrease() {
            dispatch({
                type:"counter/decrease"
            })
        }
    }
}
export default connect(mapState2Props, mapDispatch2Props)(Counter)
