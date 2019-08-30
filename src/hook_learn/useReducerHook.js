import React, { useReducer, useMemo } from 'react'

const initialState = {count: 0}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      throw new Error(`action.type ${action.type} donot have Handler`)
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const computedCounter = useMemo(() => {
    return state.count
  }, [state.count])
  return (
    <React.Fragment>
      Count: {state.count}
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <div>{computedCounter}</div>
    </React.Fragment>
  )
}

export default Counter
