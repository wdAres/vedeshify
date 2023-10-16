import React from 'react'
import classes from './CommunityHeader.module.css'
import img from '../../assets/testimonial_bg.png'
import Container from '../../UI/Container/Container'
import {GoFileMedia} from 'react-icons/go'
import {AiOutlineFileAdd} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'


const CommunityHeader = () => {
  return (
    <Container cls={classes.header}>
        <div className={` ${classes.header_top}`}>
            <img src={img} alt="Prfile Photo" />
            <input type="text" value={'Share and ask something to anyone !'} readOnly />
        </div>
        <div className={`${classes.header_bottom}`}>
        <span><GoFileMedia className={classes.logo_img} />Photos & Videos</span>
          <span><AiOutlineFileAdd className={classes.logo_img} />Files</span>
          <span><IoLocationOutline className={classes.logo_img} />Location</span>
        </div>
    </Container>
  )
}

export default CommunityHeader