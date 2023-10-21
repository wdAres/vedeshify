import React, { useState } from 'react'
import classes from './CommunityHeader.module.css'
import img from '../../assets/testimonial_bg.png'
import Container from '../../UI/Container/Container'
import { GoFileMedia } from 'react-icons/go'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { LuFileVideo } from 'react-icons/lu'
import CommunityModal from '../AllModals/CommunityModal/CommunityModal'


const CommunityHeader = () => {
  const [popup, setPopup] = useState(false)

  const togglePopup = () => {
    setPopup(!popup)
  }


  return (
    <>
      <CommunityModal isPopup={popup} popupFunc={setPopup} />
      <Container cls={classes.header}>
        <div className={` ${classes.header_top}`}>

          <img src={img} alt="Prfile Photo" />
          <input type="text" value={'Share and ask something to anyone !'} readOnly />
        </div>
        <div className={`${classes.header_bottom}`}>
          <span onClick={togglePopup}><GoFileMedia className={classes.logo_img} />Photos & Videos</span>
          <span onClick={togglePopup}><AiOutlineFileAdd className={classes.logo_img} />Files</span>
          <span onClick={togglePopup}><LuFileVideo className={classes.logo_img} />Reels</span>
        </div>
      </Container>
    </>
  )
}

export default CommunityHeader