import React, { useState } from 'react'
import classes from './Layout.module.css'

import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { authActions } from '../../store/authSlice'
import { parse } from 'dotenv'
import { isLoggedInUser } from '../../thunkActions/authThunk'





const Layout = (props) => {

  const [sidebar, setSidebar] = useState(false)
  const navigate = useNavigate()

  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  // console.log(isLoggedIn);

  const sidebarToggleHandler = () => {
    sidebar === true ? setSidebar(false) : setSidebar(true)
  }

  const dispatch = useDispatch()

  dispatch(isLoggedInUser())

  // useEffect(() => {
  //   if (sessionStorage.getItem('user')) {
  //     const user = JSON.parse(sessionStorage.getItem('user'))
  //     console.log(user)
  //     dispatch(authActions.login({
  //       data:user
  //     }))
  //   }
  //   else{
  //     navigate('/')
  //   }
  // }, [])


  return (

    <div className={classes.layout}>
      <div className={`${classes.left} ${sidebar === true ? classes.sidebar_true : ''}`}>
        <Sidebar onSideberBtn={sidebarToggleHandler} />
      </div>
      <div className={classes.right}>
        <Navbar onSideberBtn={setSidebar} />
        {props.children}
      </div>
    </div>
  )
}

export default Layout