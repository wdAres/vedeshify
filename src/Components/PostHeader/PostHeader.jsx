import React from 'react'
import img from '../../assets/testimonial_bg.png'
import classes from './PostHeader.module.css'
const PostHeader = (props) => {

  const followStatus = props.follow_status === true ? 'Followed' : 'Follow'

  return (
    <div className={`${classes.card} `}>
        <img src={img} alt="Profile Picture" />
        <div className={`${classes.details}`}>
            <div className={classes.div}>
            <h5 className=''>Puneet Shruvastav</h5>
            <button className={classes.follow_btn}>{followStatus}</button>
            </div>
            <span>Admission Aboard</span>
            <span>1 min ago</span>
        </div>
    </div>
  )
}

export default PostHeader