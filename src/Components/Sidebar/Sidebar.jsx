import React from 'react'
import classes from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
// import dp
import img from '../../assets/dp.png'
import logo from '../../assets/logo.png'

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <img src={logo} alt="" />
        <button className={classes.side_bn} onClick={() => { props.onSideberBtn() }}><RxCross2 /></button>
      </div>

      <div className={classes.middle} onClick={() => { props.onSideberBtn() }}>
        <h5>Generals</h5>
        <NavLink className={classes.link} to={'/dashboard'}>
          Dashboard
        </NavLink>
        <NavLink className={classes.link} to={'/students'}>
          Students
        </NavLink>
        <NavLink className={classes.link} to={'/profile'}>
          Profile
        </NavLink>
        <NavLink className={classes.link} to={'/payment'}>
          Payment
        </NavLink>
        <NavLink className={classes.link} to={'/community'}>
          Community
        </NavLink>
        <NavLink className={classes.link} to={'/chats'}>
          Chats
        </NavLink>
        <NavLink className={classes.link} to={'/schedule'}>
          Schedule
        </NavLink>
        <NavLink className={classes.link} to={'/inquiries'}>
        Inquiries
        </NavLink>
        <NavLink className={classes.link} to={'/reports'}>
          Reports
        </NavLink>
        <NavLink className={classes.link} to={'/support'}>
          Support
        </NavLink>
        <NavLink className={classes.link} to={'/booking'}>
          Booking
        </NavLink>
        <NavLink className={classes.link} to={'/services'}>
          Services
        </NavLink>
        {/* <br />
        <h5>Generals</h5>
        <NavLink className={classes.link} to={'/'}>
          Roles
        </NavLink>
        <NavLink className={classes.link} to={'/'}>
          Preferences
        </NavLink>
        <NavLink className={classes.link} to={'/'}>
          Profile
        </NavLink>
        <NavLink className={classes.link} to={'/'}>
          Notifications
        </NavLink> */}
      </div>

    </div>
  )
}

export default Sidebar