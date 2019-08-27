import React from "react"

// function withSubscription(WarppedComponent, selectData) {
//   return class extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         data: selectData(DataSource, props)
//       }
//     }
//     componentDidMount() {
//       DataSource.addChangeListener(this.handleChange)
//     }
//     componentWillUnmount() {
//       DataSource.removeChangeListener(this.handleChange)
//     }
//     handleChange = () => {
//       this.setState({
//         data: selectData(DataSource, this.props)
//       })
//     }
//     render() {
//       return <WarppedComponent data={this.state.data} {...this.props} />
//     }
//   }
// }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component"
}

function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {
    static displayName = `withSubscription(${getDisplayName(WrappedComponent)})`
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  return WithSubscription
}

class SomeComponent extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.WithSubSomeComp = withSubscription(SomeComponent)
  }
  render() {
    const WithSubSomeComp = this.WithSubSomeComp
    return <WithSubSomeComp>{3211}</WithSubSomeComp>
  }
}

export default App
