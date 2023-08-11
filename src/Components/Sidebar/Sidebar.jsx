import React from 'react'
import classes from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
// import dp
import img from '../../assets/dp.png'


const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <h2>
          Tutorazzi
        </h2>
        <button className={classes.side_bn} onClick={() => { props.onSideberBtn() }}><RxCross2 /></button>
      </div>

      <div className={classes.middle} onClick={() => { props.onSideberBtn() }}>
        <h5>Generals</h5>
        <NavLink className={classes.link} to={'/dashboard'}>
          Dashboard
        </NavLink>
        <NavLink className={classes.link} to={'/student'}>
          Student Info
        </NavLink>
        <NavLink className={classes.link} to={'/payment'}>
          Payment
        </NavLink>
        <NavLink className={classes.link} to={'/classes'}>
          Classes
        </NavLink>
        <NavLink className={classes.link} to={'/chats'}>
          Chats
        </NavLink>
        <NavLink className={classes.link} to={'/reports'}>
          Reports
        </NavLink>
        <NavLink className={classes.link} to={'/schedule'}>
          Schedule
        </NavLink>
        <br />
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
          Support
        </NavLink>
        <NavLink className={classes.link} to={'/'}>
          Notifications
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar