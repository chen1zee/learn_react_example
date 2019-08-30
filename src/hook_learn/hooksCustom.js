import React, {useState, useEffect} from "react"

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null)
  useEffect(() => {
    console.log('useEffect hook call')
    setIsOnline(val => !val)
    return () => {
      console.log('useEffect hook clear cb')
    }
  }, [])
  return isOnline
}

/**
 * @return {string}
 */
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id)
  if (isOnline === null) return "loading..."
  return isOnline ? "Online" : "Offline"
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)
  return (
    <li style={{color: isOnline ? "green" : "black"}}>
      {props.friend.name}
    </li>
  )
}
