import React from 'react'
import classes from './NewCourseCard.module.css'
import img from '../../assets/course.png'
import Container from '../../UI/Container/Container'
import dp from '../../assets/dp1.png'
import star from '../../assets/star-t.png'
import { Link } from 'react-router-dom'

const NewCourseCard = (props) => {

  const para = '*M7 Expert* | 10 yrs. coaching experience | 5 top MBA admit w/ $1mm in $!'

  return (
    <Container cls={`${classes.card} ${props.cls}`}>
      <div className={classes.img_con}>
        <img src={img} alt="" />
      </div>
      <div className={classes.card_details}>
        <Link className='text-decotation-none' to={''}>1:1 Consulation for job in germany</Link>
        <p>$125/per Hour </p>
      </div>
      <div className={`${classes.bottom_con}`}>
        <img src={dp} alt="" />
        <div className={`${classes.box1}`}>
          <p className={`text-capitalize`}>puneet Shrivastav</p>
          <p className={`${classes.tc}`}><img className={classes.star} src={star} alt="" /> 5.0 (30 Reviews)</p>
          <p className={`${classes.w100} ${classes.tc}`}>{para.slice(0,30)}...</p>
        </div>
      </div>
      <div className={`${classes.bottom_con}`}>
        <div className={`${classes.box1}`}>
          <Link to={'edit'} className={`text-capitalize`}>Edit</Link>
          <Link to={''} className={`text-capitalize`}>Delete</Link>
        </div>
      </div>
    </Container>
  )
}

export default NewCourseCard
