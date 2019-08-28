import React from "react"

// class MouseTracker extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {x: 0, y: 0}
//   }
//   handleMouseMove = e => {
//     this.setState({ x: e.clientX, y: e.clientY })
//   }
//   render() {
//     return (
//       <div style={{height: "100%"}} onMouseMove={this.handleMouseMove}>
//         <h1>移动鼠标</h1>
//         <p>当前鼠标位置为 ({this.state.x}, {this.state.y})</p>
//       </div>
//     )
//   }
// }


class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <div style={{
        width: '100px', height: '100px', backgroundColor: 'red',
        position: 'absolute', top: mouse.y, left: mouse.x
      }} />
    )
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {x: 0, y: 0}
  }
  handleMouseMove = e => {
    this.setState({ x: e.clientX, y: e.clientY })
  }
  render() {
    return (
      <div style={{height: "500px"}} onMouseMove={this.handleMouseMove}>
        {/**
         Instead of providing a static representation of what <Mouse /> renders,
         use the `render` prop to dynamically determine what to render
         */}
        {this.props.renderCcc(this.state)}
      </div>
    )
  }
}


class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标</h1>
        <Mouse renderCcc={mouse => (
          <Cat mouse={mouse} />
        )} />
      </div>
    )
  }
}

export default MouseTracker
