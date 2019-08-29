import React, { useState, useEffect } from "react"

function Example() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `you clicked ${count} times`
  })
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.aaa = null
    window.aaa = this.aaa
  }
  render() {
    return (
      <React.Fragment>
        <Example />
      </React.Fragment>
    )
  }
}

export default App
