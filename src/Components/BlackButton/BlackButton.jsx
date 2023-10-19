import React from 'react'
import classes from './BlackButton.module.css'

const BlackButton = (props) => {

  const run = () => {
    if (props.func) {
       props.func(!props.funcVal)
    }

    // Calling regular function
    else if (props.func2){
      props.func2()
    }
    
  }

  return (
    <button onClick={run} disabled={props.disabled} className={`${classes.button} ${props.cls}`}>
        {props.disabled == true ? '...Loading' : props.children }
    </button>
  )
}

export default BlackButton