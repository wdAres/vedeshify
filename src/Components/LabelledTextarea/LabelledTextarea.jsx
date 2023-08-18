import React from 'react'
import classes from './LabelledTextarea.module.css'

const LabelledTextarea = (props) => {
    return (
        <div className={classes.input_div}>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea readOnly={props.ro} id={props.id}>
                {props.value}
            </textarea>
        </div>
    )
}

export default LabelledTextarea