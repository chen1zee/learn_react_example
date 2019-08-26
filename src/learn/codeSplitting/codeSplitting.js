import React from "react"
const OtherCom = React.lazy(() => import("./components/OtherCom"))
const { Suspense } = React

// TODO https://zh-hans.reactjs.org/docs/code-splitting.html#error-boundaries
// 读至 异常捕获边界（Error boundaries）
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
