import React from "react"
const OtherCom = React.lazy(() => import("./components/OtherCom"))
const { Suspense } = React

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <OtherCom />
        </Suspense>
      </div>
    )
  }
}

export default MyComponent
