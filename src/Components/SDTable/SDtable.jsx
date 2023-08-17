import React from 'react'
import classes from './SDtable.module.css'

const SDtable = () => {
  return (
    <div className={classes.table}>
        <div className={classes.row}>
        <div className={classes.item}>University</div>
        <div className={classes.item}>Country</div>
        <div className={classes.item}>Exit Date</div>
        <div className={classes.item}>Graduation Date</div>
        </div>
        <div className={classes.row}>
            <div className={classes.item}>--</div>
            <div className={classes.item}>--</div>
            <div className={classes.item}>--</div>
            <div className={classes.item}>--</div>
        </div>
    </div>
  )
}

export default SDtable