import React from "react"

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  )
}

function Dialog(props) {
  return (
    <FancyBorder color="true">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {login: ""}
  }
  handleChange = e => {
    this.setState({login: e.target.value})
  }
  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}`)
  }
  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>sign me up!</button>
      </Dialog>
    )
  }
}

function WelcoomeDialog() {
  return (
    <div>
      <Dialog title="Welcome"
      message="Thank you for visiting our spacecraft!" />
      <div>######splitPane##########</div>
      <SplitPane left={<div>123</div>}
      right={<div>321</div>} />
      <div>######SignUpDialog######</div>
      <SignUpDialog />
    </div>
  )
}

export default WelcoomeDialog
