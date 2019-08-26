import React from "react"

const AaaCtx = React.createContext({
  aaa: 123,
  bbb: "ccc"
})


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aaaCtxInstance: {
        aaa: 456123,
        bbb: "ddd",
        eee: true
      }
    }
  }
  render() {
    return (
      <AaaCtx.Provider value={this.state.aaaCtxInstance}>
        <Toolbar />
      </AaaCtx.Provider>
    )
  }
}

class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <ThemeButton aaa="aaa" bbb="bbb" />
      </div>
    )
  }
}

class ThemeButton extends React.Component {
  static contextType = AaaCtx
  handleClick = () => {
    console.log(this.context)
  }
  render() {
    const {aaa, bbb} = this.props
    return (
      <button onClick={this.handleClick}>
        123{aaa}{bbb}
      </button>
    )
  }
}

export default App
