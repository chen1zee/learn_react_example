import React from "react"

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }
  handleInputChange = e => {
    const target = e.target
    const val = target.type == "checkbox" ? target.checked : target.value
    const name = target.name
    this.setState({[name]: val})
  }
  render() {
    return (
      <form>
        <label>
          参与：
          <input name="isGoing" type="checkbox"
                 checked={this.state.isGoing}
                 onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
          来宾人数：
          <input name="numberOfGuests" type="number"
                 value={this.state.numberOfGuests}
                 onChange={this.handleInputChange} />
        </label>
        <br/>
        <input type="text" value={undefined} readOnly={true} />
      </form>
    )
  }
}

export default Reservation
