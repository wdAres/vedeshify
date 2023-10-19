import React from 'react'
import classes from './LabelledInput.module.css'

const LabelledInput = (props) => {

  const register = props.register ? props.register(props.name,{required:true}) : {}

  return (
    <div className={classes.input_div}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...register}  value={props.value} readOnly={props.ro} type={props.type ? props.type : 'text'} id={props.id} placeholder={props.ph} />
      
    </div>
  )
}

export default LabelledInput