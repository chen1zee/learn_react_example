import React from "react"

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton" onClick={() => console.log('click button')}>
    {props.children}
  </button>
))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.buttonRef = React.createRef()
  }
  componentDidMount() {
    window.aaa = this.buttonRef
    window.setTimeout(() => {
      this.buttonRef.current.click()
    }, 1000)
  }
  render() {
    return (
      <FancyButton ref={this.buttonRef}>click me!</FancyButton>
    )
  }
}

export default App
