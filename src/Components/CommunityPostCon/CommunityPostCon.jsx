import React from 'react'
import classes from './CommunityPostCon.module.css'
import PostHeader from '../PostHeader/PostHeader'
import Container from '../../UI/Container/Container'
const CommunityPostCon = (props) => {
    return (
        <Container cls={`${classes.container} ${props.cls}`}>
            <PostHeader follow_status={props.follow_status} />

            {props.children}

            <div className={` ${classes.bottom}`}>
                <div className={`${classes.btns}`}>
                    <button className={``}>Like</button>
                    <button className={``}>Comment</button>
                    <button className={``}>Save</button>
                </div>
                <button className={``}>Share</button>
            </div>
        </Container>
    )
}

export default CommunityPostCon