import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }
  static getDerivedStateFromError(error) {
    // 更新state 使下一次渲染 能够显示降级后的 UI
    return {hasError: true}
  }
  componentDidCatch(error, errorInfo) {
    // 错误日志
    console.log("######")
    console.log(error)
    console.log(errorInfo)
    console.log(errorInfo.componentStack)
    console.log("######")
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

class SomeChild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState(state => ({
        counter: ++state.counter
      }))
    }, 500)
  }

  render() {
    if (this.state.counter >= 5) throw new Error("crash")
    return (
      <div>counter {this.state.counter}</div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <SomeChild />
      </ErrorBoundary>
    )
  }
}

export default App
