import React from "react"

class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props)
    // 调用 setState 不能引起 componentUpdate
    this.state = {
      aaa: {
        count: 1
      }
    }
  }
  handleClick = () => {
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
