import React from 'react'
import classes from './Navbar.module.css'

import search from '../../assets/search.png'
import setting from '../../assets/setting.png'
import calender from '../../assets/cal.png'
import alert from '../../assets/alert.png'
import bell from '../../assets/bell.png'
import dp from '../../assets/dp.png'
import cd from '../../assets/cd.png'
import { Link } from 'react-router-dom'
import Notifications from '../Notifications/Notifications'
import { useState } from 'react'
import { BsBell } from 'react-icons/bs'

const Navbar = (props) => {

  const [notification,setNotification] = useState(false)

  const sidebarHandler = () => {
    props.onSideberBtn(true)
  }

  return (
    <>
      {notification &&  <Notifications setterFunc={setNotification} />}
      <header className={classes.navbar}>
        <div className={classes.search_bar}>
          <img src={search} alt="" />
          <input placeholder='Search...' type="text" />
        </div>
        <div className={classes.nav_body}>
          <div onClick={()=>setNotification(!notification)} className={classes.nav_btn}>
          <img src={bell} alt="" />
          </div>
          <Link to={'/support'} className={classes.nav_btn}>
            <img src={setting} alt="" />
          </Link>
          <Link to={'/booking'} className={classes.nav_btn}>
            <img src={calender} alt="" />
          </Link>
          <Link to={'/profile'} className={classes.nav_profile}>
            <div>
              <img src={dp} alt="" />
              <p>Puneet Shrivastav</p>
              {/* <img src={cd} alt="" /> */}
            </div>
          </Link>
          <button onClick={sidebarHandler} className={classes.sidebar_open_btn}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar