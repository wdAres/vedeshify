import React from 'react'
import classes from './BlackButton.module.css'

const BlackButton = (props) => {

  const run = () => {
    if (props.func) {
      // console.log('hello');
       props.func(!props.funcVal)
    }

    // Calling regular function
    else if (props.func2){
      props.func2()
    }
    
  }

  return (
    <button onClick={run} className={`${classes.button} ${props.cls}`}>
        {props.children}
    </button>
  )
}

export default BlackButton