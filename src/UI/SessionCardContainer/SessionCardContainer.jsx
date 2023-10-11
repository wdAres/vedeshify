import React from 'react'
import classes from './SessionCardContainer.module.css'
import SessionCard from '../../Components/SessionCard/SessionCard'


const SessionCardContainer = (props) => {
  return (
    <div className={`${classes.container}`}>
      <SessionCard btns={props.btns} link={props.link} />
      <SessionCard btns={props.btns} link={props.link} />
    </div>
  )
}

export default SessionCardContainer