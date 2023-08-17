import React from 'react'
import classes from './Academics.module.css'
import cdimg from '../../../assets/cd1.png'
import CDheader from '../../../Components/CDheader/CDheader'
import Container from '../../../UI/Container/Container'
import Heading from '../../../Components/Heading/Heading'
import SDtable from '../../../Components/SDTable/SDtable'
import Foldable from '../../../Components/Foldable/Foldable'


const Academics = (props) => {
  return (
    <div className={classes.overall_container}>
      <Container cls={classes.header_container}>
        <CDheader src={cdimg} title={'Academics'} cls={classes.header} />
        <div className={classes.header_bottom}>
          <Heading heading='Education Information' p='You can see a student’s education information such as their school or university' cls={classes.heading} />
          <SDtable />
        </div>
      </Container>

      <Container cls={classes.container}>
        <Heading heading='School Academics' p='You can see a student’s School Academics such ' cls={classes.heading} />
        <Foldable cls={classes.fold1}>
          <h3 className={classes.sa_heading}>Year 2 School Work</h3>
          <div className={classes.flex_con}>
            <div>
              <h5>Class Size</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target Class Rank</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Current Class Rank</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Transcript</h5>
              <p>50</p>
            </div>
            <div>
              <h5>GPA Scale</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Actual GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target Cumulative GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Cumulative GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>GPA Weighting</h5>
              <p>50</p>
            </div>
          </div>
        </Foldable>
        <Foldable cls={classes.fold1}>
          <h3 className={classes.sa_heading}>Year 2 School Work</h3>
          <div className={classes.flex_con}>
            <div>
              <h5>Class Size</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target Class Rank</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Current Class Rank</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Transcript</h5>
              <p>50</p>
            </div>
            <div>
              <h5>GPA Scale</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Actual GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target Cumulative GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Cumulative GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>GPA Weighting</h5>
              <p>50</p>
            </div>
          </div>
        </Foldable>
        <Foldable>
          <h3 className={classes.sa_heading}>Year 2 School Work</h3>
          <div className={classes.flex_con}>
            <div>
              <h5>Class Size</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target Class Rank</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Current Class Rank</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Transcript</h5>
              <p>50</p>
            </div>
            <div>
              <h5>GPA Scale</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Actual GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Target Cumulative GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>Cumulative GPA</h5>
              <p>50</p>
            </div>
            <div>
              <h5>GPA Weighting</h5>
              <p>50</p>
            </div>
          </div>
        </Foldable>
      </Container>

      <Container cls={classes.container}>
        <Heading heading='Academic Research & Publications' p='You can see a student’s Academic Research & Publications' cls={classes.heading} />
        <Foldable>
          <div className={classes.arp_heading_div}>
            <h3>Research Name</h3>
            <span>Start Date 28/8/2023</span>
            <span>End Date 28/8/2023</span>
          </div>
          <div className={classes.flex_con}>
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
            <div className={classes.flex_col_p}>
              <h5>Research Question</h5>
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className={classes.flex_col_p}>
              <h5>Research Paper</h5>
              <div>
                <a href="#!">paper.pdf</a>
                <a href="#!">paper.pdf</a>
                <a href="#!">paper.pdf</a>
                <a href="#!">paper.pdf</a>
              </div>
            </div>

          </div>
        </Foldable>
      </Container>

      <Container cls={classes.container}>
        <Heading heading='Creative Portfolios' p='You can see a student’s Creative Portfolios' cls={classes.heading} />
        <Foldable>
          <div className={classes.arp_heading_div}>
            <h3>Portfolio Name</h3>
            <span>Visual Art</span>
          </div>
          <div className={classes.flex_con}>
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
            <div className={classes.flex_col_p}>
              <h5>Research Paper</h5>
              <div>
                <a href="#!">paper.pdf</a>
                <a href="#!">paper.pdf</a>
                <a href="#!">paper.pdf</a>
                <a href="#!">paper.pdf</a>
              </div>
            </div>

          </div>
        </Foldable>
      </Container>

    </div>
  )
}

export default Academics