import React, {useState, useCallback} from "react"

// function MeasureExample() {
//   const [height, setHeight] = useState(0)
//   const measureRef = useCallback(node => {
//     if (node !== null) setHeight(node.getBoundingClientRect().height)
//   }, [])
//   return (
//     <React.Fragment>
//       <h1 ref={measureRef}>Hello, world</h1>
//       <h2>The above header is {Math.round(height)}px tall</h2>
//     </React.Fragment>
//   )
// }

function MeasureExample() {
  const [rect, ref] = useClientRect()
  return (
    <React.Fragment>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null &&
      <h2>The above header is {Math.round(rect.height)}px tall</h2>}
    </React.Fragment>
  )
}

/**
 * @return {array} arr
 * @return {object} arr[0] 节点的 rect 对象
 * @return {object} arr[1] useCallback ref
 * */
function useClientRect() {
  const [rect, setRect] = useState(null)
  const ref = useCallback(node => {
    if (node !== null) setRect(node.getBoundingClientRect())
  }, [])
  return [rect, ref]
}

export default MeasureExample
