import React, { useState } from 'react'
import classes from './FileLabel.module.css'

const FileLabel = (props) => {

  const [data,setData] = useState('')  

  return (
    <div className={classes.input_container}>
        <input onChange={(e)=>setData(e.target.value)} type="file" id={props.id} />
        <label htmlFor={props.id}>Upload</label>
        <div>{data}</div>
    </div>
  )
}

export default FileLabel