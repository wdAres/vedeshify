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
        <Link className='text-decotation-none' to={'/counselor-listing-details'}>1:1 Consulation for job in germany</Link>
        <p>$125/per Hour </p>
      </div>
      <div className={`d-flex column-gap-2 align-items-center ${classes.bottom_con} px-2 py-3 justify-content-between`}>
        <img src={dp} alt="" />
        <div className={`d-flex flex-wrap column-gap-2 row-gap-1`}>
          <p className={`text-capitalize`}>puneet Shrivastav</p>
          <p className={`text-capitalize d-flex column-gap-1 align-items-center `}><img className={classes.star} src={star} alt="" /> 5.0 (30 Reviews)</p>
          <p className={`w-100 text-capitalize`}>{para.slice(0,30)}...</p>
        </div>
      </div>
    </Container>
  )
}

export default NewCourseCard
