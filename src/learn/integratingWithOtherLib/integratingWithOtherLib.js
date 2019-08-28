import React from "react"

const $ = window.$

/**
 * props:
 *    onChange(val):null //
 *    children: object // <select>.children
 * */
class Chosen extends React.Component {
  componentDidMount() {
    this.$el = $(this.el)
    this.$el.chosen()
    this.$el.on("change", this.handleChange)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      console.log('componentDidUpdate')
      console.log(prevProps.children == this.props.children)
      this.$el.trigger("chosen:updated")
    }
  }
  componentWillUnmount() {
    this.$el.off("change", this.handleChange)
    this.$el.chosen("destroy")
  }
  handleChange = e => {
    this.props.onChange(e.target.value)
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
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
    this.onChange = val => console.log(val)
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState(state => ({ counter: ++state.counter }))
    }, 500)
  }
  render() {
    return (
      <div>
        <Chosen onChange={this.onChange}>
          <option>asd</option>
          <option>qwe</option>
          <option>zxc</option>
        </Chosen>
      </div>
    )
  }
}

export default App
