import React from 'react'
import classes from './CDheader.module.css'

const CDheader = (props) => {
  return (
    <div className={`${classes.header} ${props.cls}`}>
      <h2>{props.title}</h2>
      <div className={classes.det_box}>
        <div >
            <h4>01</h4>
            <p>In Progress</p>
        </div>
        <div >
            <h4>01</h4>
            <p>Planned</p>
        </div>
        <div >
            <h4>01</h4>
            <p>Complete</p>
        </div>
      </div>
      <img src={props.src} alt="Header Image" />
    </div>
  )
}

export default CDheader
