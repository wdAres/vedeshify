import React from 'react'
import classes from './SessionCard.module.css'
import { Link } from 'react-router-dom'
import Container from '../../UI/Container/Container'


const SessionCard = (props) => {
    return (
        <Container cls={classes.card}>
            <div className={`d-flex align-items-center justify-content-between`}>
                <Link to={props.link} className={`fw-normal ${classes.h6_a}`}>Lorem ipsum dolor sit amet consectetur.</Link>
                <div className={classes.hr_tag}>1hr</div>
            </div>

            <div className={`${classes.df} `}>
                <div className={classes.card_tags}>
                    <span>10:00 Am to 10:30 Am</span>
                    <span>Tue 20 June 2023</span>
                    <span className={classes.w100}>Counselor : <span className={classes.bold_span}>Puneet Shrivastav</span></span>
                </div>

                {props.btns &&
                    <div className={classes.btns_c}>
                        <button className={`${classes.cancel} ${classes.btn}`}>Cancel</button>
                        <button className={`${classes.accept} ${classes.btn}`}>Accept</button>
                        <button className={`${classes.reschedule} ${classes.btn}`}>Reschedule</button>
                    </div>
                }
            </div>
        </Container>
    )
}

export default SessionCard