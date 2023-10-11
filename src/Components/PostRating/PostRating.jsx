import React from 'react'
import classes from './PostRating.module.css'
import star from '../../assets/star-t.png'

const PostRating = () => {
  return (
    <div className={classes.rating}>
        <h3>Rate Your Counselor</h3>
        <p>Rate Counselor By Selecting From 1 to 5 Stars To Express your Views</p>
        <div className={`${classes.star_con}`}>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
        </div>
    </div>
  )
}

export default PostRating