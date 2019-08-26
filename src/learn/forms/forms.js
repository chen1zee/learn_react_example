import React from "react"

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      textareaValue: "默认值",
      selectValue: ["coconut"]
    }
  }
  handleChange = e => {
    this.setState({value: e.target.value})
  }
  handleTextareaChange = e => {
    this.setState({textareaValue: e.target.value})
  }
  handleSelectChange = e => {
    this.setState({selectValue: e.target.value})
  }
  handleSubmit = e => {
    alert("提交名字" + this.state.value)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字: <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label>
          文章: <textarea value={this.state.textareaValue} onChange={this.handleTextareaChange} />
        </label>
        <div>##########select#########</div>
        <select value={this.state.selectValue} multiple={true} onChange={this.handleSelectChange}>
          <option value="lime">橙子</option>
          <option value="coconut">椰子</option>
        </select>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

export default NameForm
