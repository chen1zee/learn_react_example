import React from "react"

class LoginButton extends React.Component {
  constructor(props) {
    super(props)
  }
  /**
   * 此语法确保 `handleClick`内的`this`已被绑定。
   * 这是 *实验性* 语法
   * */
  handleClick = (e) => {
    console.log('this is ', this)
    console.log(e)
  }

  handleClickWithParams = (str, str2, e) => {
    console.log(str)
    console.log(e)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click me
        </button>
        <div />
        <button onClick={this.handleClickWithParams.bind(this, "asd", "dsa")}>
          asd
        </button>

      </div>
    );
  }
}

export default LoginButton
