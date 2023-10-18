import React from 'react'
import classes from './LabelledInput.module.css'

const LabelledInput = (props) => {

  const changeHandler = (e) => {
    if (props.changeFunc) {
      props.changeFunc(e.target.value)
    }
  }

  return (
    <div className={classes.input_div}>
      <label htmlFor={props.id}>{props.label}</label>
      <input onChange={changeHandler} value={props.value} readOnly={props.ro} type={props.type ? props.type : 'text'} id={props.id} placeholder={props.ph} />
    </div>
  )
}

export default LabelledInput