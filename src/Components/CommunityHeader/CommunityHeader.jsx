import React from 'react'
import classes from './CommunityHeader.module.css'
import img from '../../assets/testimonial_bg.png'
import Container from '../../UI/Container/Container'
const CommunityHeader = () => {
  return (
    <Container cls={classes.header}>
        <div className={` ${classes.header_top}`}>
            <img src={img} alt="Prfile Photo" />
            <input type="text" value={'Share and ask something to anyone !'} readOnly />
        </div>
        <div className={`${classes.header_bottom}`}>
            <span>Camera</span>
            <span>Images</span>
            <span>Files</span>
            <span>Video</span>
            <span>Location</span>
        </div>
    </Container>
  )
}

export default CommunityHeader