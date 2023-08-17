import React from 'react'
import classes from './Major.module.css'
import style from '../CDMAIN.module.css'
import Container from '../../../UI/Container/Container'
import CDheader from '../../../Components/CDheader/CDheader'
import Heading from '../../../Components/Heading/Heading'
import cdimg from '../../../assets/cd4.png'
import Foldable from '../../../Components/Foldable/Foldable'

const Major = () => {
  return (
    <div className={style.overall_container}>
       <Container cls={style.header_container}>
        <CDheader src={cdimg} title={'Majors and Careers'} cls={classes.header} />
        <div className={style.header_bottom}>
          <Heading heading='School Research & Preparation' p='You can see a student’s School Research & Preparation' cls={classes.heading} />
          <Foldable>
          <div className={style.arp_heading_div}>
            <h3>Activity Name</h3>
            <span>Community Service (Volunteer)</span>
          </div>
          <div className={style.flex_con}>
            <div>
              <h5>Research Field</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Sub Field</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Advisor</h5>
              <p>Puneet Shrivastav</p>
            </div>
            <div>
              <h5>Advisor Affiliation</h5>
              <p>Puneet Shrivastav</p>
            </div>
            <div>
              <h5>Pursuing University</h5>
              <p>Puneet Shrivastav</p>
            </div>
            <div className={style.flex_col_p}>
              <h5>Research Question</h5>
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          
          </div>
        </Foldable>
        </div>
      </Container>

      <Container cls={style.container}>
        <Heading heading='Major, Career and Interest Exploration' p='You can see a student’s Major, Career and Interest Exploration' cls={classes.heading} />
        <Foldable cls={style.fold1}>
          <div className={style.arp_heading_div}>
            <h3>Internship Title</h3>
            <span>Industry : Music</span>
          </div>
          <div className={style.flex_con}>
            <div>
              <h5>Start  Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>End Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Program Provider</h5>
              <p>Puneet Shrivastav</p>
            </div>
            

          </div>
        </Foldable>
        <Foldable >
          <div className={style.arp_heading_div}>
            <h3>Internship Title</h3>
            <span>Industry : Music</span>
          </div>
          <div className={style.flex_con}>
            <div>
              <h5>Start  Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>End Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Program Provider</h5>
              <p>Puneet Shrivastav</p>
            </div>
          </div>
        </Foldable>
      </Container>
      <Container cls={style.container}>
        <Heading heading='Networking' p='You can see a student’s Networking' cls={classes.heading} />
        <Foldable cls={style.fold1}>
          <div className={style.arp_heading_div}>
            <h3>Internship Title</h3>
            <span>Industry : Music</span>
          </div>
          <div className={style.flex_con}>
            <div>
              <h5>Start  Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>End Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Program Provider</h5>
              <p>Puneet Shrivastav</p>
            </div>
            

          </div>
        </Foldable>
        <Foldable >
          <div className={style.arp_heading_div}>
            <h3>Internship Title</h3>
            <span>Industry : Music</span>
          </div>
          <div className={style.flex_con}>
            <div>
              <h5>Start  Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>End Date</h5>
              <p>--</p>
            </div>
            <div>
              <h5>Program Provider</h5>
              <p>Puneet Shrivastav</p>
            </div>
          </div>
        </Foldable>
      </Container>
    </div>
  )
}

export default Major