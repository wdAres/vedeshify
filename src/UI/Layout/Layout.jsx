import React, { useState } from 'react'
import classes from './Layout.module.css'

import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'


const Layout = (props) => {

  const [sidebar, setSidebar] = useState(false)

    const sidebarToggleHandler = () =>{
        sidebar===true?setSidebar(false):setSidebar(true)
    }

    const location = useLocation();

  return (
    
    <div className={classes.layout}>
        <div className={`${classes.left} ${sidebar===true? classes.sidebar_true:''}`}>
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