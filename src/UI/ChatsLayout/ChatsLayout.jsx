import React, { useState } from 'react'
import classes from './ChatsLayout.module.css'
import ChatsSidebar from '../../Components/ChatsSidebar/ChatsSidebar'
import ChatsMain from '../../Components/ChatsMain/ChatsMain'

const ChatsLayout = () => {

  const [isActive, setActive] = useState(false)
  const [user, setUser] = useState(null)

  const updateProfile = (data) => {
    setUser(data)
  }

  return (
    <div className={classes.container}>
      <ChatsSidebar updateProfile={updateProfile} Func={setActive} value={isActive} />
      {/* <ChatsSidebar Func={setActive} value={isActive} /> */}
      <ChatsMain user={user} value={isActive} />
      {/* <ChatsMain value={isActive} /> */}
    </div>
  )
}

export default ChatsLayout