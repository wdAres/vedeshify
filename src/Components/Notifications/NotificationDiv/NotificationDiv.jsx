import React from 'react'
import { BsBell } from 'react-icons/bs'
import classes from './NotificationDiv.module.css'

const NotificationDiv = (props) => {

    const data = props.data

    const functionHandler = () => {
        props.popupFunc(true)
        // props.setterFunc(false)
    }

    return (
        <div className={classes.row} onClick={functionHandler}>
            <div className={classes.bell}><BsBell /></div>
            <p className={classes.p}>
                {data.p.slice(0,51)}...
            </p>
            <span className={classes.span}>{data.time}</span>
        </div>
    )
}

export default NotificationDiv