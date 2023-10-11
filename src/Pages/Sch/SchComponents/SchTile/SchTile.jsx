import React, { useState } from 'react'
import classes from './SchTile.module.css'

const SchTile = (props) => {

    const [active,setActive] = useState(false)

    const clickHandler = () => {
        alert(props.date)
        setActive(!active)
    }

  return (
    <div onClick={clickHandler} className={`${classes.tile} ${active && classes.active}`}>
        
    </div>
  )
}

export default SchTile
