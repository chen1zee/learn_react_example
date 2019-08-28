import React from "react"
import ReactDOM from "react-dom"

class Portals extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <span>123321123</span>,
      document.getElementById("p1")
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Portals />
    )
  }
}

export default App
