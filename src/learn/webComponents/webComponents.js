import React from "react"

class Aaa extends React.Component {
  render() {
    const a = [1,2,3]
    return (
      <React.Fragment>
        {a.map(i => <div key={i}>i</div>)}
      </React.Fragment>
    )
  }
}
