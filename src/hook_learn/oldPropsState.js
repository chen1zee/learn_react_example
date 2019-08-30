import React, {useState, useRef} from "react"

function Example() {
  const [count, setCount] = useState(0)
  const countRef = useRef()
  countRef.current = count
  function handleAlertClick() {
    setTimeout(() => {
      alert("you clicked on: " + countRef.current)
    }, 3000)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>show Alert</button>
    </div>
  )
}

export default Example
