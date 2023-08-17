import React from 'react'
import classes from './Testing.module.css'
import style from '../CDMAIN.module.css'


import Container from '../../../UI/Container/Container'
import CDheader from '../../../Components/CDheader/CDheader'
import Heading from '../../../Components/Heading/Heading'
import SDtable from '../../../Components/SDTable/SDtable'
import cdimg from '../../../assets/cd2.png'

const Testing = () => {
  return (
    <div className={classes.overall_container}>
      <Container cls={style.header_container}>
        <CDheader src={cdimg} title={'Testing'} cls={classes.header} />
        <div className={style.header_bottom}>
          <Heading heading='Testing Overview' p='You can see a student’s Testing Overview' cls={classes.heading} />
          <SDtable />
        </div>
      </Container>

      <Container cls={style.container}>
        <Heading heading='US Undergraduate Test' p='ACT Official Test' cls={classes.heading} />
        <Container cls={`${style.flex_con} ${style.container}`}>
            <div>
              <h5>Start Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>End Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Total Marks</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Target</h5>
              <p>--</p>
            </div>
        </Container>
      </Container>

      <Container cls={style.container}>
        <Heading heading='UK Undergraduate Test' p='ACT Official Test' cls={classes.heading} />
        <Container cls={`${style.flex_con} ${style.container}`}>
            <div>
              <h5>Start Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>End Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Total Marks</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Target</h5>
              <p>--</p>
            </div>
        </Container>
      </Container>
    </div>
  )
}

export default Testing