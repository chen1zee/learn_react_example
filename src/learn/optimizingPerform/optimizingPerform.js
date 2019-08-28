import React from "react"

class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props)
    // TODO state内 key==普通类型时， 如 number
    // 调用 setState 不能引起 componentUpdate
    // TODO 看源码处理
    this.state = {
      aaa: {
        count: 1
      }
    }
  }
  handleClick = () => {
    console.log("123")
    this.setState(state => ({
      aaa: Object.assign({}, state.aaa, {count: ++state.aaa.count})
    }))
  }
  render() {
    console.log('render')
    return (
      <div>
        <button color={this.props.color} onClick={this.handleClick}>
          Count: {this.state.aaa.count}
        </button>
        {/*<button color={this.props.color} onClick={() => this.setState(state => ({count: state.count + 1}))}>*/}
        {/*  Count: {this.state.count}*/}
        {/*</button>*/}
      </div>
    )
  }
}

export default CounterButton
