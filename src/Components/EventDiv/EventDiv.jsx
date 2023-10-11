import React from 'react'
import classes from './EventDiv.module.css'
import img from '../../assets/teamcard.png'
import BlackButton from '../BlackButton/BlackButton'

const EventDiv = (props) => {
    return (
        <div className={classes.card}>
            <img src={img} alt="Profile Picture" />
            <div className={classes.card_body}>
                <p>{props.p}</p>
                <h5>{props.h5}</h5>
                <h6>{props.h6}</h6>
            </div>
            <BlackButton cls={classes.card_btn}>Join</BlackButton>
        </div>
    )
}

export default EventDiv