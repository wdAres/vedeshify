import React, { useState } from 'react'
import ChatsMain from '../../Components/ChatsMain/ChatsMain'
import CommunitySidebar from '../../Components/CommunitySidebar/CommunitySidebar'
import classes from './Cl.module.css'

const ChatsLayout = () => {

  const [isActive,setActive] = useState(false)

  return (
    <div className={classes.container}>
        <CommunitySidebar activeFnc={setActive} val={isActive} />
        <ChatsMain value={isActive} />
    </div>
  )
}

export default ChatsLayout