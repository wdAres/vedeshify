import React from 'react'
import classes from './BookingDetails.module.css'
import Heading from '../../Components/Heading/Heading'
import Container from '../../UI/Container/Container'
// import { BsBell } from 'react-icons/bs'
import TaskFold from '../../Components/TaskFold/TaskFold'
import DocumentCard from '../../Components/DocumentCard/DocumentCard'
import PostRating from '../../Components/PostRating/PostRating'

const PastBookingDetails = () => {
    return (
        <section className={classes.section}>
            <Heading cls={classes.reverse} heading={'Session Details'} p={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, rerum.'} />
            <Container cls={`${classes.profile_container}`}>
                <div className={`${classes.inner_con}`}>
                    <div className={classes.img_container}>A</div>
                    <div className={`${classes.details_container}`}>
                        <h5>Counseling Session with Abhinav Singh</h5>
                        <span>10:30 Am to 12:30 Pm</span>
                        <span>Tuesday 20 June 2022</span>
                        <span className={classes.w100}>Counselor : Abhinav Singh (Counselor) </span>
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

            <Container cls={`${classes.container} ${classes.task_container}`}>
                <h3 className={classes.uni_heading}>Task Information</h3>
                <TaskFold />
                <TaskFold />
            </Container>

            <Container cls={`${classes.container} ${classes.rating_container}`}>
                <PostRating />
                <PostRating />
            </Container>

            <Container cls={`${classes.container} ${classes.documents_container}`}>
                <h3 className={classes.uni_heading}>Session Resources</h3>

                <DocumentCard />
                <DocumentCard />
                <DocumentCard />
            </Container>

        </section>
    )
}

export default PastBookingDetails