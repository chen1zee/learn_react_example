import React from "react"

const $ = window.$

class Chosen extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    this.$el = $(this.el)
    this.$el.chosen()
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>123</div>
    )
  }
}

export default App
