import React from 'react'
import classes from './PersonalInfo.module.css'
import Container from '../../../UI/Container/Container'
import Heading from '../../../Components/Heading/Heading'
import style from '../CDMAIN.module.css'
import ProfileDiv from '../../../Components/ProfileDiv/ProfileDiv'
import StdProfile from '../../../Components/StdProfile/StdProfile'

const PersonalInfo = () => {
    return (
        <div className={classes.flex_container}>
            <div className={`${classes.left} ${style.overall_container} ${style.spl}`}>
                <Container >
                    <div className={classes.header}>Personal Information</div>
                    <Heading heading={'Basic Information'} p={'You can see a student’s Basic Information'} cls={`${classes.heading} ${classes.pl}`} />
                    <div className={`${style.flex_con} ${style.container}`}>
                        <div>
                            <h5>First Name</h5>
                            <p>Puneet</p>
                        </div>
                        <div>
                            <h5>Middle Name</h5>
                            <p>--</p>
                        </div>
                        <div>
                            <h5>Last Name</h5>
                            <p>Shrivastav</p>
                        </div>
                        <div>
                            <h5>City</h5>
                            <p>New Delhi</p>
                        </div>
                        <div>
                            <h5>Preferred Name</h5>
                            <p>Sharad</p>
                        </div>
                        <div>
                            <h5>Preferred Pronouns</h5>
                            <p>New Delhi</p>
                        </div>
                        <div>
                            <h5>Gender</h5>
                            <p>New Delhi</p>
                        </div>
                        <div>
                            <h5>Date of Birth</h5>
                            <p>New Delhi</p>
                        </div>
                        <div>
                            <h5>Location</h5>
                            <p>New Delhi</p>
                        </div>
                        <div>
                            <h5>Timezone</h5>
                            <p>New Delhi</p>
                        </div>
                        <div>
                            <h5>Meeting Availability</h5>
                            <p>New Delhi</p>
                        </div>
                        <div>
                            <h5>State</h5>
                            <p>New Delhi</p>
                        </div>
                        <div className={style.flex_col_p}>
                            <h5>Address</h5>
                            <p>H-22 Sector 37 Faridabad, Haryana</p>
                        </div>
                        <div className={style.flex_col_p}>
                            <h5>Bio</h5>
                            <p>Hey hey! My name is Satvik Kapoor, and I am a high school senior. If you ever want to talk about new ideas, STEM, metal (Metallica), anime, origami, COD, or random topics like "was Lionardo a feminist" I am your person. I love meeting new people. Finding relations of economic activities to psychology, physics, or computer science has become a hobby.</p>
                        </div>
                    </div>
                </Container>

                <Container cls={style.container}>
                    <Heading heading={'Applications'} p={'You can see a student’s Application Information'} cls={classes.heading} />
                    <div className={`${style.flex_con} ${classes.mt}`}>
                        <div>
                            <h5>Application</h5>
                            <p>Puneet</p>
                        </div>
                        <div>
                            <h5>Intended Major</h5>
                            <p>--</p>
                        </div>
                        <div>
                            <h5>Recommended Majors</h5>
                            <p>Shrivastav</p>
                        </div>


                        <div className={style.flex_col_p}>
                            <h5>Financial Aid Needed</h5>
                        </div>

                        <div className={style.flex_col_p}>
                            <h5>Hook Statement</h5>
                            <p>
                            interdisciplinary apprehension for economics, computer science, and psychology 
                            </p>
                        </div>


                    </div>
                </Container>

                <Container cls={style.container}>
                    <Heading heading={'Contact Details'} p={'You can see a student’s Contact Information'} cls={classes.heading} />
                    <div className={`${style.flex_con} ${classes.mt}`}>
                        <div>
                            <h5>Phone</h5>
                            <p>Puneet</p>
                        </div>
                        <div>
                            <h5>School Currency</h5>
                            <p>--</p>
                        </div>
                        <div>
                            <h5>Recommended Majors</h5>
                            <p>Shrivastav</p>
                        </div>


                    </div>
                </Container>
            </div>
            <StdProfile cls={classes.right} />
        </div>
    )
}

export default PersonalInfo