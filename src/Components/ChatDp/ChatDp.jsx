import React from 'react'
import classes from './ChatDp.module.css'
import img from '../../assets/dp1.png'

const ChatDp = (props) => {

  // console.log(props?.data)
  const clickFunc=()=>{
    props.updateProfile(props?.data)
  }

  return (
    <div onClick={clickFunc} className={classes.dp}>
    {/* <div  className={classes.dp}> */}
      <img src={img} alt="Profile Picture" />
      {/* <p>{props.data?.name}</p> */}
    </div>
  )
}

export default ChatDp