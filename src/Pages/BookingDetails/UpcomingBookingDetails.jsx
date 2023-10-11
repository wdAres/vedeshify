import React from 'react'
import classes from './BookingDetails.module.css'
import Heading from '../../Components/Heading/Heading'
import Container from '../../UI/Container/Container'
// import { BsBell } from 'react-icons/bs'
import img from '../../assets/usd1.png'
import { useNavigate } from 'react-router-dom'

const UpcomingBookingDetails = () => {

    const navigate = useNavigate()
    const changePage = () => { 
        navigate('/sch')
    }

    return (
        <section className={classes.section}>
            <Heading cls={classes.reverse} heading={'Session Details'} p={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, rerum.'} btn={'Reschedule'} btnFunction2={changePage} />
            <Container cls={`${classes.profile_container} `}>
                <div className={`${classes.inner_con}`}>
                    <div className={classes.img_container}>A</div>
                    <div className={`${classes.details_container} d-flex flex-wrap`}>
                        <h5>Counseling Session with Abhinav Singh</h5>
                        <span>10:30 Am to 12:30 Pm</span>
                        <span>Tuesday 20 June 2022</span>
                        <span  className={classes.w100}>Counselor : Abhinav Singh (Counselor) </span>
                    </div>
                </div>
                <button className={classes.reminder_btn}>Recordings</button>
            </Container>


            <Container cls={`${classes.container} ${classes.desc_container}`}>
                <h3 className={classes.uni_heading}>Description</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias ducimus aliquid itaque debitis harum iste perspiciatis consequuntur? Beatae odit eius ea voluptatem sed repellat dolor et laborum a tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sed ut dolores maiores dolorum voluptates explicabo modi in, veritatis repudiandae quod quibusdam! Rerum.
                </p>
            </Container>

            <Container cls={`${classes.container} ${classes.teachers_info_container}`}>
                <h3 className={classes.uni_heading}>Teacher's Instructions</h3>
                <div>
                    <img src={img} alt="ynamic vectord" />
                    <p>No Information Available From Teacher 1</p>
                </div>
            </Container>
        </section>
    )
}

export default UpcomingBookingDetails