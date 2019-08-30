import React, { useState, useRef, useEffect } from "react"


function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    console.log("usePrevious call")
    ref.current = value
  })
  return ref.current
}

function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => console.log("Counter before prevCount call"))
  const prevCount = usePrevious(count)
  useEffect(() => console.log("Counter after prevCount call"))
  const addCount = () => setCount(cout => count + 1)
  return (
    <React.Fragment>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={addCount}>Add Count</button>
    </React.Fragment>
  )
}

export default Counter
