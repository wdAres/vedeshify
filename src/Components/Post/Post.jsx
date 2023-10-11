import React from 'react'
import classes from './Post.module.css'
import post from '../../assets/post.png'

const Post = () => {
  return (
  <div className={`${classes.post} `}>
    <div className={classes.top}>
        <p>
        Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
    </div>
    <div className={`${classes.tags}`}>
        <span>#alpha</span>
        <span>#beta</span>
    </div>
    <div className={classes.media}>
        <img src={post} alt="Post" />
    </div>
  </div>
  )
}

export default Post