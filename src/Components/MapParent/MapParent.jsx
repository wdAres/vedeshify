import React from 'react'
import classes from './MapParent.module.css'
import Container from '../../UI/Container/Container'


const MapParent = (props) => {
  return (
    <Container cls={`${classes.container} ${props.cls}`}>
        <div className={classes.header}>{props.heading}</div>
        <div className={classes.body}>
            {props.children}
        </div>
    </Container>
  )
}

export default MapParent