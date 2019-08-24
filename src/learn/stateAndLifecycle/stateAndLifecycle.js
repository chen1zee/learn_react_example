import React from "react"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      counter: 1
    }
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({ date: new Date() })
    this.setState((state, props) => ({
      counter: ++state.counter
    }))
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>{this.state.counter}</h2>
      </div>
    )
  }
}

export default Clock
