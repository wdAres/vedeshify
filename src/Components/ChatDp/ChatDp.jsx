import React from 'react'
import classes from './ChatDp.module.css'
import img from '../../assets/dp1.png'

const ChatDp = (props) => {

  return (
    <div className={classes.dp}>
      <img src={img} alt="Profile Picture" />
      <p>{props.name}</p>
    </div>
  )
}

export default ChatDp