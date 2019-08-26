import React from "react"

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.props.inputElement} />
      </div>
    )
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef()
  }
  onClickFocus = () => {
    this.inputElement.current.focus()
  }
  render() {
    return (
      <div>
        <CustomTextInput inputElement={this.inputElement} />
        <button onClick={this.onClickFocus}>onClickFocus</button>
      </div>
    )
  }
}

export default Parent
