import React from "react"

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>aaa</td>
        <td>bbb</td>
      </React.Fragment>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    )
  }
}

export default App

