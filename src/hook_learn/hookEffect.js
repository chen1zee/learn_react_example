import React, {useState, useEffect} from "react"

function FriendStatusWithCounter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  const [isOnline, setIsOnline] = useState(null)
  useEffect(() => {
    console.log('effect call')
    return () => console.log('effect unmounted call')
  })
  function clickHandler() { setCount(count + 1) }
  function toggleOnline() { setIsOnline(!isOnline) }
  return (
    <div>
      <div> You clicked {count} times </div>
      <div>{isOnline ? "online" : "offline"}</div>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={toggleOnline}>toggle online</button>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <FriendStatusWithCounter />
      </div>
    )
  }
}

export default App
