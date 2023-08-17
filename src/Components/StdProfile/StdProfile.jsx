import React from 'react'
import classes from './StdProfile.module.css'
import Container from '../../UI/Container/Container'
import ChatDp from '../ChatDp/ChatDp'
import img from '../../assets/nigro.png'

const StdProfile = (props) => {
    return (
        <Container cls={`${props.cls} ${classes.container}`}>
            <div className={classes.top}>
                <img src={img} alt="Profile Picture" />
            </div>
            <div className={classes.body}>
                <div>
                    <h2>Puneet Shrivastav</h2>
                    <p>puneetsri9990@gmail.com</p>
                </div>
                <div>
                    <h2>Onboarding Documents</h2>
                    <div className={classes.doc_container}>
                        <a href="#!">Document 1</a>
                        <a href="#!">Document 2</a>
                        <a href="#!">Document 3</a>
                    </div>
                </div>
                <div>
                    <h2>My Team</h2>
                    <div className={classes.chat_box}>
                        <ChatDp />
                        <div>
                            <h3>Richa Kapoor</h3>
                            <p>Primary Student</p>
                        </div>
                    </div>
                    <button>Message</button>
                </div>
            </div>
        </Container>
    )
}

export default StdProfile