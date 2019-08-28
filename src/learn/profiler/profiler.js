import React, {Profiler} from "react"

class ProfilerComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aaa: 123
    }
  }
  componentDidMount() {
    // window.setInterval(() => {
    //   this.setState(state => ({
    //     aaa: ++state.aaa
    //   }))
    // }, 500)
  }

  callback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log(id)
    console.log(phase)
    console.log(actualDuration)
    console.log(baseDuration)
    console.log(startTime)
    console.log(commitTime)
    console.log(interactions)
  }
  render() {
    return (
      <Profiler id="Navigation" onRender={this.callback}>
        <div>{this.state.aaa}</div>
      </Profiler>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appCount: 1
    }
  }

  render() {
    return (
      <div>
        <ProfilerComp />
      </div>
    )
  }
}

export default App
