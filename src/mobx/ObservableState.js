import React from "react"
import {observable, action} from "mobx"
import {observer} from "mobx-react"

const appState = observable({
  timer: 0
})
appState.resetTimer = action(() => {
  appState.timer = 0
})

window.setInterval(action(() => {
  appState.timer += 1
}), 1000)

@observer
class TimerView extends React.Component {
  onReset = () => {
    this.props.appState.resetTimer()
  }
  render() {
    return (
      <button onClick={this.onReset}>
        Seconds passed: {this.props.appState.timer}
      </button>
    )
  }
}

class App extends React.Component {
  render() {
    return <TimerView appState={appState} />
  }
}

export default App
