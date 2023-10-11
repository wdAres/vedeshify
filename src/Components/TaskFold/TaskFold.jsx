import React from 'react'
import Foldable from '../Foldable/Foldable'
import done from '../../assets/check-contained.png'
import alert from '../../assets/alert-triangle.png'
import classes from './TaskFold.module.css'

const TaskFold = () => {
    return (
        <Foldable no_img={true} cls={classes.fold}>
            <div className={`${classes.header}`}>
                <div className={classes.inner}>
                    <h6>Task 1</h6>
                    <p>Due Date 20/3/2023</p>
                </div>
                <img src={done} alt="some img" />
            </div>
            <div className={classes.body}>
                <button className={classes.body_btn}>Mark Done</button>
            </div>
        </Foldable>
    )
}

export default TaskFold