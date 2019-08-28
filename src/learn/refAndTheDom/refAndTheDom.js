import React from "react"

class MyComonent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  componentDidMount() {
    let count = 1
    window.setInterval(() => {
      this.myRef.current.innerText = "<div onclick='alert(123);'>aaa</div>" + (++count)
    }, 500)
  }
  render() {
    return <div ref={this.myRef} />
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }
  focusTextInput = () => {
    this.textInput.current.focus()
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus the text input"
               onClick={this.focusTextInput} />
      </div>
    )
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }
  componentDidMount() {
    this.textInput.current.focusTextInput()
  }
  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    )
  }
}

class CustomInputCB extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
    this.textInput = null
    this.setTextInputRef = el => {
      console.log('trigger setRef')
      this.textInput = el
    }
  }
  componentDidMount() {
    if (this.textInput) this.textInput.focus()
    window.setInterval(() => {
      this.setState(state => ({
        counter: state.counter + 1
      }))
    }, 500)
  }
  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <input className={this.state.counter} type="text" ref={this.setTextInputRef} />
        <input className={this.state.counter} type="button" value="Focus the text input"
               onClick={this.focusTextInput} />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <MyComonent />
        <div />
        <CustomTextInput />
        <div />
        <AutoFocusTextInput />
        <div />
        <CustomInputCB />
      </div>
    )
  }
}

export default App
