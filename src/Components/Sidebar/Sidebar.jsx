import React from 'react'
import classes from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
// import dp
import img from '../../assets/dp.png'
import logo from '../../assets/logo_new.png'
import i1 from "../../assets/Icons/dash_icon.svg";
import i2 from "../../assets/Icons/schedule_icon.svg";
import i3 from "../../assets/Icons/plan_biiling_icon.svg";
import i4 from "../../assets/Icons/services_icon.svg";
import i5 from "../../assets/Icons/bookings_icon.svg";
import i6 from "../../assets/Icons/inquiries_icon.svg";
import i7 from "../../assets/Icons/support_icon.svg";
import i8 from "../../assets/Icons/payments_icon.svg";
import i9  from "../../assets/Icons/resource_icon.svg";
import i10  from "../../assets/Icons/roles_icon.svg";
import i11  from "../../assets/Icons/profile_icon.svg";
import i12 from "../../assets/Icons/message_icon.svg";
import i from "../../assets/Icons/svg_ic.svg";

import {ReactSVG} from 'react-svg';
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
      <ReactSVG className={classes.svg} src={i1} /> Dashboard
        </NavLink>
        <NavLink className={classes.link} to={'/students'}>
        <ReactSVG className={classes.svg} src={i10} /> Students
        </NavLink>
        <NavLink className={classes.link} to={'/profile'}>
        <ReactSVG className={classes.svg} src={i11} />  Profile
        </NavLink>
        <NavLink className={classes.link} to={'/payment'}>
        <ReactSVG className={classes.svg} src={i8} /> Payment
        </NavLink>
        <NavLink className={classes.link} to={'/community'}>
        <ReactSVG className={classes.svg} src={i6} /> Community
        </NavLink>
        <NavLink className={classes.link} to={'/chats'}>
        <ReactSVG className={classes.svg} src={i12} /> Chats
        </NavLink>
        {/* <NavLink className={classes.link} to={'/schedule'}>
          Schedule
        </NavLink> */}
        <NavLink className={classes.link} to={'/inquiries'}>
        <ReactSVG className={classes.svg} src={i9} /> Inquiries
        </NavLink>
        <NavLink className={classes.link} to={'/booking'}>
        <ReactSVG className={classes.svg} src={i} /> Booking
        </NavLink>
        <NavLink className={classes.link} to={'/services'}>
        <ReactSVG className={classes.svg} src={i4} /> Services
        </NavLink>
        <NavLink className={classes.link} to={'/reports'}>
        <ReactSVG className={classes.svg} src={i7} /> Reports
        </NavLink>
        <NavLink className={classes.link} to={'/support'}>
        <ReactSVG className={classes.svg} src={i11} />  Support
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