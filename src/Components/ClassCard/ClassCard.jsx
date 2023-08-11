import React from 'react'
import classes from './ClassCard.module.css'
import clock from '../../assets/clock-check.png'
import cal from '../../assets/calendar-number.png'
import file from '../../assets/file.png'
import cr from '../../assets/cr.png'
import Container from '../../UI/Container/Container'
import { Link } from 'react-router-dom'

const ClassCard = (props) => {
  const data = props.data
  return (
    <Container cls={`${classes.card} ${props.cls}`}>
        <h3>{data.title}</h3>
        <p><img src={file} alt="" />Agenda : {data.agenda}</p>
        <p><img src={clock} alt="" />{data.timing}</p>
        <p><img src={cal} alt="" />{data.date}</p>
        
        
        <button onClick={()=>props.Func(!props.Val)} className={classes.link} >Details <img src={cr} alt="" /></button>
    </Container>
  )
}

export default ClassCard