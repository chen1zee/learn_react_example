import React from "react"

function Avatar(props) {
  return (
    <img src={props.user.avatarUrl}
         alt={props.user.name} />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfoName">
        {props.author.name}
      </div>
    </div>
  )
}

function Comment(props) {
  const formatDate = () => "1233213123---123123"
  return (
    <div className="Comment">
      {/** userInfo */}
      <UserInfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  )
}

function App() {
  return (
    <Comment author={{name: "asd", avatarUrl: "url"}}
             text="sad" date="asddddd"  />
  )
}

export default App
